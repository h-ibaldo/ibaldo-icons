import type { DefineComponent } from 'vue';

export interface GitCommitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitCommit: DefineComponent<GitCommitProps>;

export default GitCommit;
export { GitCommit };
