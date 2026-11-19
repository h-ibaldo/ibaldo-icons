import type { DefineComponent } from 'vue';

export interface CloudCheckCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudCheckCorner: DefineComponent<CloudCheckCornerProps>;

export default CloudCheckCorner;
export { CloudCheckCorner };
