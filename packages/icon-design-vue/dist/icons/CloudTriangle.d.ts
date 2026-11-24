import type { DefineComponent } from 'vue';

export interface CloudTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudTriangle: DefineComponent<CloudTriangleProps>;

export default CloudTriangle;
export { CloudTriangle };
