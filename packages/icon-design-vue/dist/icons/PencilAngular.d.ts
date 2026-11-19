import type { DefineComponent } from 'vue';

export interface PencilAngularProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PencilAngular: DefineComponent<PencilAngularProps>;

export default PencilAngular;
export { PencilAngular };
