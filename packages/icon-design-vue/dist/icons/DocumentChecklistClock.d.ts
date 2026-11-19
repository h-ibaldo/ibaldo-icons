import type { DefineComponent } from 'vue';

export interface DocumentChecklistClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const DocumentChecklistClock: DefineComponent<DocumentChecklistClockProps>;

export default DocumentChecklistClock;
export { DocumentChecklistClock };
