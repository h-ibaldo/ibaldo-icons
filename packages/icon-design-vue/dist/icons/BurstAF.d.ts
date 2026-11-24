import type { DefineComponent } from 'vue';

export interface BurstAFProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BurstAF: DefineComponent<BurstAFProps>;

export default BurstAF;
export { BurstAF };
