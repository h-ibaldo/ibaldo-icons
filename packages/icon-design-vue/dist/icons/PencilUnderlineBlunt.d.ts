import type { DefineComponent } from 'vue';

export interface PencilUnderlineBluntProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilUnderlineBlunt: DefineComponent<PencilUnderlineBluntProps>;

export default PencilUnderlineBlunt;
export { PencilUnderlineBlunt };
