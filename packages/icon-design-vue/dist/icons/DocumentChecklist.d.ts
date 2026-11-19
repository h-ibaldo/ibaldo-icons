import type { DefineComponent } from 'vue';

export interface DocumentChecklistProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentChecklist: DefineComponent<DocumentChecklistProps>;

export default DocumentChecklist;
export { DocumentChecklist };
