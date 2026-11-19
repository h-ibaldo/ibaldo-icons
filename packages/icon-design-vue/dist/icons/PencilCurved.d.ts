import type { DefineComponent } from 'vue';

export interface PencilCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilCurved: DefineComponent<PencilCurvedProps>;

export default PencilCurved;
export { PencilCurved };
