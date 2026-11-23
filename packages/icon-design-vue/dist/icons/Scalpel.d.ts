import type { DefineComponent } from 'vue';

export interface ScalpelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Scalpel: DefineComponent<ScalpelProps>;

export default Scalpel;
export { Scalpel };
