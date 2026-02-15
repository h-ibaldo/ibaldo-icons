import { SvelteComponent } from 'svelte';

export interface DragAndDrop3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragAndDrop3 extends SvelteComponent<DragAndDrop3Props> {}
