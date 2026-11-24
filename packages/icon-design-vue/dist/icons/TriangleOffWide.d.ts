import type { DefineComponent } from 'vue';

export interface TriangleOffWideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TriangleOffWide: DefineComponent<TriangleOffWideProps>;

export default TriangleOffWide;
export { TriangleOffWide };
