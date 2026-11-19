import type { DefineComponent } from 'vue';

export interface DocumentListPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentListPlus: DefineComponent<DocumentListPlusProps>;

export default DocumentListPlus;
export { DocumentListPlus };
