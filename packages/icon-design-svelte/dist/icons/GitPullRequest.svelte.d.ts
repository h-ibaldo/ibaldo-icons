import { SvelteComponent } from 'svelte';

export interface GitPullRequestProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GitPullRequest extends SvelteComponent<GitPullRequestProps> {}
