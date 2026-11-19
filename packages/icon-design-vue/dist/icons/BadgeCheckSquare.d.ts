import type { DefineComponent } from 'vue';

export interface BadgeCheckSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BadgeCheckSquare: DefineComponent<BadgeCheckSquareProps>;

export default BadgeCheckSquare;
export { BadgeCheckSquare };
