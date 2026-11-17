import { SvelteComponent } from 'svelte';

export interface DragImageProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DragImage extends SvelteComponent<DragImageProps> {}
