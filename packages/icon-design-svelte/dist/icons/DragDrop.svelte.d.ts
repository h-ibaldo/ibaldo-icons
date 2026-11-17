import { SvelteComponent } from 'svelte';

export interface DragDropProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragDrop extends SvelteComponent<DragDropProps> {}
