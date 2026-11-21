import type { DefineComponent } from 'vue';

export interface NotApproximateSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const NotApproximateSquare: DefineComponent<NotApproximateSquareProps>;

export default NotApproximateSquare;
export { NotApproximateSquare };
