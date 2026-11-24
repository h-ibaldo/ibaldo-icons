import { SvelteComponent } from 'svelte';

export interface DocumentChecklistCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentChecklistCheck extends SvelteComponent<DocumentChecklistCheckProps> {}
