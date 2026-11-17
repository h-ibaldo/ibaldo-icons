import { SvelteComponent } from 'svelte';

export interface DragDropFileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragDropFile extends SvelteComponent<DragDropFileProps> {}
