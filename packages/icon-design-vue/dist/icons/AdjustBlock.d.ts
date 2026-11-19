import type { DefineComponent } from 'vue';

export interface AdjustBlockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AdjustBlock: DefineComponent<AdjustBlockProps>;

export default AdjustBlock;
export { AdjustBlock };
