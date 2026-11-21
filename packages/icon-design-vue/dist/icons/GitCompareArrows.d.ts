import type { DefineComponent } from 'vue';

export interface GitCompareArrowsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitCompareArrows: DefineComponent<GitCompareArrowsProps>;

export default GitCompareArrows;
export { GitCompareArrows };
