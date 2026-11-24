import type { DefineComponent } from 'vue';

export interface AdjustTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AdjustTick: DefineComponent<AdjustTickProps>;

export default AdjustTick;
export { AdjustTick };
