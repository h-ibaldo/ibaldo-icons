import type { DefineComponent } from 'vue';

export interface DivideSquareCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DivideSquareCompact: DefineComponent<DivideSquareCompactProps>;

export default DivideSquareCompact;
export { DivideSquareCompact };
