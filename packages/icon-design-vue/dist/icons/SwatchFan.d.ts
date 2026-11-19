import type { DefineComponent } from 'vue';

export interface SwatchFanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SwatchFan: DefineComponent<SwatchFanProps>;

export default SwatchFan;
export { SwatchFan };
