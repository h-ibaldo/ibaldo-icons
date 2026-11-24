import type { DefineComponent } from 'vue';

export interface GitBranchPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitBranchPlus: DefineComponent<GitBranchPlusProps>;

export default GitBranchPlus;
export { GitBranchPlus };
