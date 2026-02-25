#!/usr/bin/env node

/**
 * Automated Release Script for Icon Design Packages
 *
 * This script automates the release process for both React and Svelte packages:
 * 1. Rebuilds both packages from latest icons
 * 2. Updates version numbers (patch, minor, or major)
 * 3. Updates CHANGELOG.md files
 * 4. Creates git commits and tags
 * 5. Publishes to npm
 * 6. Pushes to GitHub
 *
 * Usage:
 *   npm run release:patch   # 0.1.0 → 0.1.1 (bug fixes)
 *   npm run release:minor   # 0.1.0 → 0.2.0 (new features)
 *   npm run release:major   # 0.1.0 → 1.0.0 (breaking changes)
 *
 * Options:
 *   --skip-build     Skip rebuilding packages
 *   --skip-publish   Skip npm publish (for testing)
 *   --skip-push      Skip git push
 *   --dry-run        Show what would happen without doing it
 *   --otp=123456     Provide npm one-time password for 2FA
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

// Parse command line arguments
const args = process.argv.slice(2);
const versionType = args[0] || 'patch'; // patch, minor, or major
const skipBuild = args.includes('--skip-build');
const skipPublish = args.includes('--skip-publish');
const skipPush = args.includes('--skip-push');
const dryRun = args.includes('--dry-run');
const otpIndex = args.findIndex(arg => arg.startsWith('--otp='));
const otp = otpIndex !== -1 ? args[otpIndex].split('=')[1] : null;

// Package paths
const packages = [
  {
    name: '@ibaldo/zicon-react',
    path: resolve(projectRoot, 'packages/icon-design-react'),
    buildScript: 'node scripts/build.js'
  },
  {
    name: '@ibaldo/zicon-svelte',
    path: resolve(projectRoot, 'packages/icon-design-svelte'),
    buildScript: 'node scripts/build.cjs'
  }
];

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function exec(command, options = {}) {
  if (dryRun) {
    log(`[DRY RUN] Would execute: ${command}`, 'cyan');
    return '';
  }

  try {
    return execSync(command, {
      stdio: options.silent ? 'pipe' : 'inherit',
      cwd: options.cwd || projectRoot,
      encoding: 'utf-8'
    });
  } catch (error) {
    log(`❌ Command failed: ${command}`, 'red');
    log(error.message, 'red');
    process.exit(1);
  }
}

function getPackageVersion(packagePath) {
  const packageJson = JSON.parse(
    readFileSync(resolve(packagePath, 'package.json'), 'utf-8')
  );
  return packageJson.version;
}

function bumpVersion(version, type) {
  const [major, minor, patch] = version.split('.').map(Number);

  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
    default:
      return `${major}.${minor}.${patch + 1}`;
  }
}

function updatePackageVersion(packagePath, newVersion) {
  const packageJsonPath = resolve(packagePath, 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  packageJson.version = newVersion;

  if (!dryRun) {
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  }
}

function updateChangelog(packagePath, version) {
  const changelogPath = resolve(packagePath, 'CHANGELOG.md');
  const today = new Date().toISOString().split('T')[0];

  try {
    let changelog = readFileSync(changelogPath, 'utf-8');

    // Insert new version after "## [Unreleased]" section
    const unreleasedIndex = changelog.indexOf('## [Unreleased]');
    if (unreleasedIndex === -1) {
      log(`⚠️  No [Unreleased] section found in ${changelogPath}`, 'yellow');
      return;
    }

    const newEntry = `\n## [${version}] - ${today}\n\n### Changed\n- Package rebuild with latest icons\n`;

    // Find the next section (usually the previous version)
    const nextSectionIndex = changelog.indexOf('\n## [', unreleasedIndex + 1);
    const insertIndex = nextSectionIndex === -1 ? changelog.length : nextSectionIndex;

    changelog =
      changelog.slice(0, insertIndex) +
      newEntry +
      changelog.slice(insertIndex);

    if (!dryRun) {
      writeFileSync(changelogPath, changelog);
    }

    log(`  ✓ Updated CHANGELOG.md`, 'green');
  } catch (error) {
    log(`  ⚠️  Could not update CHANGELOG.md: ${error.message}`, 'yellow');
  }
}

async function confirm(question) {
  if (dryRun) {
    log(`[DRY RUN] Would ask: ${question}`, 'cyan');
    return true;
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(`${colors.yellow}${question} (y/N): ${colors.reset}`, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes');
    });
  });
}

async function main() {
  log('\n🚀 Icon Design Package Release Automation\n', 'bright');

  // Validate version type
  if (!['patch', 'minor', 'major'].includes(versionType)) {
    log('❌ Invalid version type. Use: patch, minor, or major', 'red');
    process.exit(1);
  }

  // Get current versions
  const currentVersions = packages.map(pkg => ({
    name: pkg.name,
    current: getPackageVersion(pkg.path),
    path: pkg.path
  }));

  // Calculate new versions
  const releases = currentVersions.map(pkg => ({
    ...pkg,
    new: bumpVersion(pkg.current, versionType)
  }));

  // Show release plan
  log('📋 Release Plan:', 'bright');
  log(`   Version bump: ${versionType}`, 'blue');
  releases.forEach(({ name, current, new: newVersion }) => {
    log(`   ${name}: ${current} → ${newVersion}`, 'cyan');
  });

  if (skipBuild) log('   ⚠️  Skipping build', 'yellow');
  if (skipPublish) log('   ⚠️  Skipping npm publish', 'yellow');
  if (skipPush) log('   ⚠️  Skipping git push', 'yellow');
  if (dryRun) log('   🔍 DRY RUN MODE', 'magenta');

  log('');

  // Confirm with user
  const proceed = await confirm('Proceed with release?');
  if (!proceed) {
    log('\n❌ Release cancelled by user', 'red');
    process.exit(0);
  }

  log('');

  // Step 1: Build packages
  if (!skipBuild) {
    log('📦 Building packages...', 'bright');

    for (const pkg of packages) {
      log(`\n  Building ${pkg.name}...`, 'blue');
      exec(pkg.buildScript, { cwd: pkg.path });
      log(`  ✓ ${pkg.name} built successfully`, 'green');
    }
  }

  // Step 2: Update versions and changelogs
  log('\n📝 Updating versions and changelogs...', 'bright');

  for (let i = 0; i < packages.length; i++) {
    const pkg = packages[i];
    const { new: newVersion } = releases[i];

    log(`\n  Updating ${pkg.name}...`, 'blue');
    updatePackageVersion(pkg.path, newVersion);
    log(`  ✓ Updated package.json to ${newVersion}`, 'green');

    updateChangelog(pkg.path, newVersion);
  }

  // Step 3: Git commit
  log('\n📝 Creating git commit...', 'bright');

  const newVersion = releases[0].new; // Both packages use same version
  const commitMessage = `chore: Release v${newVersion}

- @ibaldo/zicon-react v${newVersion}
- @ibaldo/zicon-svelte v${newVersion}

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`;

  exec('git add packages/*/package.json packages/*/CHANGELOG.md');
  exec(`git commit -m "${commitMessage}"`);
  exec(`git tag -a v${newVersion} -m "Release v${newVersion}"`);

  log(`  ✓ Created commit and tag v${newVersion}`, 'green');

  // Step 4: Publish to npm
  if (!skipPublish) {
    log('\n📤 Publishing to npm...', 'bright');

    for (const pkg of packages) {
      log(`\n  Publishing ${pkg.name}...`, 'blue');

      // Check if logged in to npm
      try {
        exec('npm whoami', { silent: true });
      } catch {
        log('  ❌ Not logged in to npm. Run: npm login', 'red');
        process.exit(1);
      }

      // Publish (always use --access public for scoped packages)
      const publishCmd = otp
        ? `npm publish --access public --otp=${otp}`
        : 'npm publish --access public';
      exec(publishCmd, { cwd: pkg.path });
      log(`  ✓ ${pkg.name} published successfully`, 'green');
    }
  }

  // Step 5: Push to GitHub
  if (!skipPush) {
    log('\n🔼 Pushing to GitHub...', 'bright');

    exec('git push');
    exec('git push --tags');

    log('  ✓ Pushed commits and tags', 'green');
  }

  // Success!
  log('\n✅ Release completed successfully!', 'bright');
  log('');
  log('📦 Published packages:', 'bright');
  releases.forEach(({ name, new: version }) => {
    log(`   ${name}@${version}`, 'green');
  });

  if (!skipPublish) {
    log('\n🔗 View on npm:', 'bright');
    releases.forEach(({ name }) => {
      log(`   https://www.npmjs.com/package/${name}`, 'cyan');
    });
  }

  log('');
}

// Run the script
main().catch(error => {
  log(`\n❌ Error: ${error.message}`, 'red');
  console.error(error);
  process.exit(1);
});
