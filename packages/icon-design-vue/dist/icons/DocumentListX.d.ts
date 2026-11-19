import type { DefineComponent } from 'vue';

export interface DocumentListXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentListX: DefineComponent<DocumentListXProps>;

export default DocumentListX;
export { DocumentListX };
