import type { DefineComponent } from 'vue';

export interface BellCircleDashProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BellCircleDash: DefineComponent<BellCircleDashProps>;

export default BellCircleDash;
export { BellCircleDash };
