import type { DefineComponent } from 'vue';

export interface TriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Triangle: DefineComponent<TriangleProps>;

export default Triangle;
export { Triangle };
