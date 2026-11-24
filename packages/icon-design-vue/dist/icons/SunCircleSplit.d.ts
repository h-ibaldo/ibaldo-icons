import type { DefineComponent } from 'vue';

export interface SunCircleSplitProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunCircleSplit: DefineComponent<SunCircleSplitProps>;

export default SunCircleSplit;
export { SunCircleSplit };
