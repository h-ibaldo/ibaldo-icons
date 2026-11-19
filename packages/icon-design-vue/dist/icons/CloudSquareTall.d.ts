import type { DefineComponent } from 'vue';

export interface CloudSquareTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudSquareTall: DefineComponent<CloudSquareTallProps>;

export default CloudSquareTall;
export { CloudSquareTall };
