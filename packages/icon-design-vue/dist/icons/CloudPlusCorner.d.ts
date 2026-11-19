import type { DefineComponent } from 'vue';

export interface CloudPlusCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudPlusCorner: DefineComponent<CloudPlusCornerProps>;

export default CloudPlusCorner;
export { CloudPlusCorner };
