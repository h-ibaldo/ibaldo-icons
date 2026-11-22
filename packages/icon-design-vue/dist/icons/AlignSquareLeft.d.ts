import type { DefineComponent } from 'vue';

export interface AlignSquareLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignSquareLeft: DefineComponent<AlignSquareLeftProps>;

export default AlignSquareLeft;
export { AlignSquareLeft };
