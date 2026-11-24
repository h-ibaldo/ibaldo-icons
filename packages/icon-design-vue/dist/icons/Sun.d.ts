import type { DefineComponent } from 'vue';

export interface SunProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Sun: DefineComponent<SunProps>;

export default Sun;
export { Sun };
