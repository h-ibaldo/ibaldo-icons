import type { DefineComponent } from 'vue';

export interface CloudMinusCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMinusCorner: DefineComponent<CloudMinusCornerProps>;

export default CloudMinusCorner;
export { CloudMinusCorner };
