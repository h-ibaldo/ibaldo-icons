import type { DefineComponent } from 'vue';

export interface PencilUnderlineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilUnderline: DefineComponent<PencilUnderlineProps>;

export default PencilUnderline;
export { PencilUnderline };
