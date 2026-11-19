import type { DefineComponent } from 'vue';

export interface ProgressDotsLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ProgressDotsLeft: DefineComponent<ProgressDotsLeftProps>;

export default ProgressDotsLeft;
export { ProgressDotsLeft };
