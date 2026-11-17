import { SvelteComponent } from 'svelte';

export interface DocumentChecklistProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentChecklist extends SvelteComponent<DocumentChecklistProps> {}
