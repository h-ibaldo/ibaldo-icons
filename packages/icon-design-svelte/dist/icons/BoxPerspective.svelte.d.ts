import { SvelteComponent } from 'svelte';

export interface BoxPerspectiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxPerspective extends SvelteComponent<BoxPerspectiveProps> {}
