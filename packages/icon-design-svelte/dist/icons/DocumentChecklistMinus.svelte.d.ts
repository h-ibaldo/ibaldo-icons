import { SvelteComponent } from 'svelte';

export interface DocumentChecklistMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentChecklistMinus extends SvelteComponent<DocumentChecklistMinusProps> {}
