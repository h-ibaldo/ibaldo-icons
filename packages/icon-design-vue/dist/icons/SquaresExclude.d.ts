import type { DefineComponent } from 'vue';

export interface SquaresExcludeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquaresExclude: DefineComponent<SquaresExcludeProps>;

export default SquaresExclude;
export { SquaresExclude };
