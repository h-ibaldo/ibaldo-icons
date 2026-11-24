import type { DefineComponent } from 'vue';

export interface DocumentListPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentListPlusCircle: DefineComponent<DocumentListPlusCircleProps>;

export default DocumentListPlusCircle;
export { DocumentListPlusCircle };
