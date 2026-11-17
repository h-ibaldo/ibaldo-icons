import { SvelteComponent } from 'svelte';

export interface DragDropExtendedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragDropExtended extends SvelteComponent<DragDropExtendedProps> {}
