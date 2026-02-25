import { SvelteComponent } from 'svelte';

export interface DragAndDrop2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragAndDrop2 extends SvelteComponent<DragAndDrop2Props> {}
