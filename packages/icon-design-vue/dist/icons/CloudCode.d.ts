import type { DefineComponent } from 'vue';

export interface CloudCodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudCode: DefineComponent<CloudCodeProps>;

export default CloudCode;
export { CloudCode };
