import type { DefineComponent } from 'vue';

export interface SquaresIntersectProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquaresIntersect: DefineComponent<SquaresIntersectProps>;

export default SquaresIntersect;
export { SquaresIntersect };
