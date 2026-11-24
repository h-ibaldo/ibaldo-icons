import type { DefineComponent } from 'vue';

export interface DocumentListCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentListCheck: DefineComponent<DocumentListCheckProps>;

export default DocumentListCheck;
export { DocumentListCheck };
