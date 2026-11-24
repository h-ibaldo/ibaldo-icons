import type { DefineComponent } from 'vue';

export interface AlignSquareRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AlignSquareRight: DefineComponent<AlignSquareRightProps>;

export default AlignSquareRight;
export { AlignSquareRight };
