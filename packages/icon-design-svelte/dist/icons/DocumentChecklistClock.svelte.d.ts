import { SvelteComponent } from 'svelte';

export interface DocumentChecklistClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentChecklistClock extends SvelteComponent<DocumentChecklistClockProps> {}
