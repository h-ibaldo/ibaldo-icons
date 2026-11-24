import type { DefineComponent } from 'vue';

export interface HashSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HashSquare: DefineComponent<HashSquareProps>;

export default HashSquare;
export { HashSquare };
