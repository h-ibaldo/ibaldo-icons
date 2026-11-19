import type { DefineComponent } from 'vue';

export interface TriangleWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TriangleWide: DefineComponent<TriangleWideProps>;

export default TriangleWide;
export { TriangleWide };
