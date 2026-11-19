import type { DefineComponent } from 'vue';

export interface DocumentListMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentListMinus: DefineComponent<DocumentListMinusProps>;

export default DocumentListMinus;
export { DocumentListMinus };
