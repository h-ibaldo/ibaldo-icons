import type { DefineComponent } from 'vue';

export interface VideoPauseLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VideoPauseLarge: DefineComponent<VideoPauseLargeProps>;

export default VideoPauseLarge;
export { VideoPauseLarge };
