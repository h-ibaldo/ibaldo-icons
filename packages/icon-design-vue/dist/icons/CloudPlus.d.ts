import type { DefineComponent } from 'vue';

export interface CloudPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudPlus: DefineComponent<CloudPlusProps>;

export default CloudPlus;
export { CloudPlus };
