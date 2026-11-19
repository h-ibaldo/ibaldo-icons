import type { DefineComponent } from 'vue';

export interface PencilProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Pencil: DefineComponent<PencilProps>;

export default Pencil;
export { Pencil };
