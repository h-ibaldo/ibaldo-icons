import type { DefineComponent } from 'vue';

export interface CloudCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudCheck: DefineComponent<CloudCheckProps>;

export default CloudCheck;
export { CloudCheck };
