import { SvelteComponent } from 'svelte';

export interface DragDropImageProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragDropImage extends SvelteComponent<DragDropImageProps> {}
