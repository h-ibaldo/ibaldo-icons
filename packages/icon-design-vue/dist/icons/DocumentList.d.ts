import type { DefineComponent } from 'vue';

export interface DocumentListProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentList: DefineComponent<DocumentListProps>;

export default DocumentList;
export { DocumentList };
