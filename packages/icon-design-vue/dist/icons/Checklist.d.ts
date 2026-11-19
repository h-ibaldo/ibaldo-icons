import type { DefineComponent } from 'vue';

export interface ChecklistProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Checklist: DefineComponent<ChecklistProps>;

export default Checklist;
export { Checklist };
