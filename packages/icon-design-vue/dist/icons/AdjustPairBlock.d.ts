import type { DefineComponent } from 'vue';

export interface AdjustPairBlockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AdjustPairBlock: DefineComponent<AdjustPairBlockProps>;

export default AdjustPairBlock;
export { AdjustPairBlock };
