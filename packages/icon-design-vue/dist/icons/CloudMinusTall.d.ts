import type { DefineComponent } from 'vue';

export interface CloudMinusTallProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMinusTall: DefineComponent<CloudMinusTallProps>;

export default CloudMinusTall;
export { CloudMinusTall };
