import type { DefineComponent } from 'vue';

export interface BellSquareDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellSquareDash: DefineComponent<BellSquareDashProps>;

export default BellSquareDash;
export { BellSquareDash };
