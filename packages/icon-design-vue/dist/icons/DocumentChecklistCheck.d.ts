import type { DefineComponent } from 'vue';

export interface DocumentChecklistCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentChecklistCheck: DefineComponent<DocumentChecklistCheckProps>;

export default DocumentChecklistCheck;
export { DocumentChecklistCheck };
