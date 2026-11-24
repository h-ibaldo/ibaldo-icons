import type { DefineComponent } from 'vue';

export interface DocumentMultipleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentMultiple: DefineComponent<DocumentMultipleProps>;

export default DocumentMultiple;
export { DocumentMultiple };
