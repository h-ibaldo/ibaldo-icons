import type { DefineComponent } from 'vue';

export interface RestoreSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RestoreSquare: DefineComponent<RestoreSquareProps>;

export default RestoreSquare;
export { RestoreSquare };
