import type { DefineComponent } from 'vue';

export interface PencilRulerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilRuler: DefineComponent<PencilRulerProps>;

export default PencilRuler;
export { PencilRuler };
