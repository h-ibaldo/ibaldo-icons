import type { DefineComponent } from 'vue';

export interface SelfieProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Selfie: DefineComponent<SelfieProps>;

export default Selfie;
export { Selfie };
