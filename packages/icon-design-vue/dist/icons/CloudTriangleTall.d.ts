import type { DefineComponent } from 'vue';

export interface CloudTriangleTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudTriangleTall: DefineComponent<CloudTriangleTallProps>;

export default CloudTriangleTall;
export { CloudTriangleTall };
