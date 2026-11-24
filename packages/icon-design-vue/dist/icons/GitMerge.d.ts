import type { DefineComponent } from 'vue';

export interface GitMergeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitMerge: DefineComponent<GitMergeProps>;

export default GitMerge;
export { GitMerge };
