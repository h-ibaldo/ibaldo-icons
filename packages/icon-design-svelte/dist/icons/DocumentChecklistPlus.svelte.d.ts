import { SvelteComponent } from 'svelte';

export interface DocumentChecklistPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentChecklistPlus extends SvelteComponent<DocumentChecklistPlusProps> {}
