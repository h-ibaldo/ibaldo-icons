import { SvelteComponent } from 'svelte';

export interface BoxOpenPerspectiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxOpenPerspective extends SvelteComponent<BoxOpenPerspectiveProps> {}
