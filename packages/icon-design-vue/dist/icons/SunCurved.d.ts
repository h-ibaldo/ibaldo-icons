import type { DefineComponent } from 'vue';

export interface SunCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SunCurved: DefineComponent<SunCurvedProps>;

export default SunCurved;
export { SunCurved };
