import type { DefineComponent } from 'vue';

export interface DocumentStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentStack: DefineComponent<DocumentStackProps>;

export default DocumentStack;
export { DocumentStack };
