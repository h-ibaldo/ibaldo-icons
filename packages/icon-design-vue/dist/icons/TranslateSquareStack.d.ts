import type { DefineComponent } from 'vue';

export interface TranslateSquareStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TranslateSquareStack: DefineComponent<TranslateSquareStackProps>;

export default TranslateSquareStack;
export { TranslateSquareStack };
