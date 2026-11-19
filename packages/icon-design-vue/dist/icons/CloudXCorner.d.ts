import type { DefineComponent } from 'vue';

export interface CloudXCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudXCorner: DefineComponent<CloudXCornerProps>;

export default CloudXCorner;
export { CloudXCorner };
