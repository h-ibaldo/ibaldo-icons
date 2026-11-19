import type { DefineComponent } from 'vue';

export interface BellCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCheck: DefineComponent<BellCheckProps>;

export default BellCheck;
export { BellCheck };
