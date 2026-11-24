import type { DefineComponent } from 'vue';

export interface EyeOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeOff: DefineComponent<EyeOffProps>;

export default EyeOff;
export { EyeOff };
