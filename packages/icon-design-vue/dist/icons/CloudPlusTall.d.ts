import type { DefineComponent } from 'vue';

export interface CloudPlusTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudPlusTall: DefineComponent<CloudPlusTallProps>;

export default CloudPlusTall;
export { CloudPlusTall };
