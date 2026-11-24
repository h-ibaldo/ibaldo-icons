import type { DefineComponent } from 'vue';

export interface LifebuoyDiagonalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LifebuoyDiagonal: DefineComponent<LifebuoyDiagonalProps>;

export default LifebuoyDiagonal;
export { LifebuoyDiagonal };
