import type { DefineComponent } from 'vue';

export interface EyeLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeLarge: DefineComponent<EyeLargeProps>;

export default EyeLarge;
export { EyeLarge };
