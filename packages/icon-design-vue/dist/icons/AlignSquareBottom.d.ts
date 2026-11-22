import type { DefineComponent } from 'vue';

export interface AlignSquareBottomProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignSquareBottom: DefineComponent<AlignSquareBottomProps>;

export default AlignSquareBottom;
export { AlignSquareBottom };
