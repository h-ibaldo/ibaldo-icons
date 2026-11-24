import type { DefineComponent } from 'vue';

export interface EyeOffLiddedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeOffLidded: DefineComponent<EyeOffLiddedProps>;

export default EyeOffLidded;
export { EyeOffLidded };
