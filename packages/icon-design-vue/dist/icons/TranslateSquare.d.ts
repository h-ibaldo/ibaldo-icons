import type { DefineComponent } from 'vue';

export interface TranslateSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TranslateSquare: DefineComponent<TranslateSquareProps>;

export default TranslateSquare;
export { TranslateSquare };
