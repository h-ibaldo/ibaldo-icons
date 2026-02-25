import { SvelteComponent } from 'svelte';

export interface DragAndDropFileProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragAndDropFile extends SvelteComponent<DragAndDropFileProps> {}
