import type { DefineComponent } from 'vue';

export interface AlignSquareFrameProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignSquareFrame: DefineComponent<AlignSquareFrameProps>;

export default AlignSquareFrame;
export { AlignSquareFrame };
