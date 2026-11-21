import type { DefineComponent } from 'vue';

export interface GitCompareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitCompare: DefineComponent<GitCompareProps>;

export default GitCompare;
export { GitCompare };
