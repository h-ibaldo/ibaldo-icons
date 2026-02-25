import { SvelteComponent } from 'svelte';

export interface DragAndDropImageProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragAndDropImage extends SvelteComponent<DragAndDropImageProps> {}
