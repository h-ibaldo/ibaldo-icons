import type { DefineComponent } from 'vue';

export interface NotEqualSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NotEqualSquare: DefineComponent<NotEqualSquareProps>;

export default NotEqualSquare;
export { NotEqualSquare };
