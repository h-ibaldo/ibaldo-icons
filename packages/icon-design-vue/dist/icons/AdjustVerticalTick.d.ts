import type { DefineComponent } from 'vue';

export interface AdjustVerticalTickProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AdjustVerticalTick: DefineComponent<AdjustVerticalTickProps>;

export default AdjustVerticalTick;
export { AdjustVerticalTick };
