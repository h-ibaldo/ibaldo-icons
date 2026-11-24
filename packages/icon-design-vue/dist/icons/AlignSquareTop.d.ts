import type { DefineComponent } from 'vue';

export interface AlignSquareTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignSquareTop: DefineComponent<AlignSquareTopProps>;

export default AlignSquareTop;
export { AlignSquareTop };
