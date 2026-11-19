import type { DefineComponent } from 'vue';

export interface TriangleOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TriangleOff: DefineComponent<TriangleOffProps>;

export default TriangleOff;
export { TriangleOff };
