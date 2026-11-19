import type { DefineComponent } from 'vue';

export interface GaugeFlatCircleLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GaugeFlatCircleLarge: DefineComponent<GaugeFlatCircleLargeProps>;

export default GaugeFlatCircleLarge;
export { GaugeFlatCircleLarge };
