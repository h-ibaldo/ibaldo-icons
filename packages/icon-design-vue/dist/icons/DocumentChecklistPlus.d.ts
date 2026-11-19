import type { DefineComponent } from 'vue';

export interface DocumentChecklistPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentChecklistPlus: DefineComponent<DocumentChecklistPlusProps>;

export default DocumentChecklistPlus;
export { DocumentChecklistPlus };
