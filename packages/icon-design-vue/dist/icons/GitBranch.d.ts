import type { DefineComponent } from 'vue';

export interface GitBranchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitBranch: DefineComponent<GitBranchProps>;

export default GitBranch;
export { GitBranch };
