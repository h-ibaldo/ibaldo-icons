import type { DefineComponent } from 'vue';

export interface EyeConeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeCone: DefineComponent<EyeConeProps>;

export default EyeCone;
export { EyeCone };
