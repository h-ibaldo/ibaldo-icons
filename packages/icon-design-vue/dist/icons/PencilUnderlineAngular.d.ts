import type { DefineComponent } from 'vue';

export interface PencilUnderlineAngularProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilUnderlineAngular: DefineComponent<PencilUnderlineAngularProps>;

export default PencilUnderlineAngular;
export { PencilUnderlineAngular };
