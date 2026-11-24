import type { DefineComponent } from 'vue';

export interface PencilPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilPlain: DefineComponent<PencilPlainProps>;

export default PencilPlain;
export { PencilPlain };
