import type { DefineComponent } from 'vue';

export interface SunScallopedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunScalloped: DefineComponent<SunScallopedProps>;

export default SunScalloped;
export { SunScalloped };
