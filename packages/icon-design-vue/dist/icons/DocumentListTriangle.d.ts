import type { DefineComponent } from 'vue';

export interface DocumentListTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentListTriangle: DefineComponent<DocumentListTriangleProps>;

export default DocumentListTriangle;
export { DocumentListTriangle };
