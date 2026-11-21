import type { DefineComponent } from 'vue';

export interface SparkleFiveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SparkleFive: DefineComponent<SparkleFiveProps>;

export default SparkleFive;
export { SparkleFive };
