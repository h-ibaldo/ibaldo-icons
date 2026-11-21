import type { DefineComponent } from 'vue';

export interface GitCommitHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitCommitHorizontal: DefineComponent<GitCommitHorizontalProps>;

export default GitCommitHorizontal;
export { GitCommitHorizontal };
