import type { DefineComponent } from 'vue';

export interface AdjustPairProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AdjustPair: DefineComponent<AdjustPairProps>;

export default AdjustPair;
export { AdjustPair };
