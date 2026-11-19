import type { DefineComponent } from 'vue';

export interface GaugeLongTicksFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeLongTicksFlat: DefineComponent<GaugeLongTicksFlatProps>;

export default GaugeLongTicksFlat;
export { GaugeLongTicksFlat };
