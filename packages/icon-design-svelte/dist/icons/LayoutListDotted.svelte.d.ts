import { SvelteComponent } from 'svelte';

export interface LayoutListDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutListDotted extends SvelteComponent<LayoutListDottedProps> {}
