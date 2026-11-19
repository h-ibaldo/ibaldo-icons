import type { DefineComponent } from 'vue';

export interface ArrowLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowLeft: DefineComponent<ArrowLeftProps>;

export default ArrowLeft;
export { ArrowLeft };
