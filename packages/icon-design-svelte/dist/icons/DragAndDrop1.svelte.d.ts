import { SvelteComponent } from 'svelte';

export interface DragAndDrop1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragAndDrop1 extends SvelteComponent<DragAndDrop1Props> {}
