import type { DefineComponent } from 'vue';

export interface PencilBluntProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilBlunt: DefineComponent<PencilBluntProps>;

export default PencilBlunt;
export { PencilBlunt };
