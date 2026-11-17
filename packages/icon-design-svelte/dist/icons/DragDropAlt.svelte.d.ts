import { SvelteComponent } from 'svelte';

export interface DragDropAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragDropAlt extends SvelteComponent<DragDropAltProps> {}
