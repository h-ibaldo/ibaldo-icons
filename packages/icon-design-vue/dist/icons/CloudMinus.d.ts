import type { DefineComponent } from 'vue';

export interface CloudMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CloudMinus: DefineComponent<CloudMinusProps>;

export default CloudMinus;
export { CloudMinus };
