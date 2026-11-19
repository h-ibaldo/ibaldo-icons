import type { DefineComponent } from 'vue';

export interface DocumentListEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentListEdit: DefineComponent<DocumentListEditProps>;

export default DocumentListEdit;
export { DocumentListEdit };
