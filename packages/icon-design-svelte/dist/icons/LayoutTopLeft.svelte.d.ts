import { SvelteComponent } from 'svelte';

export interface LayoutTopLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutTopLeft extends SvelteComponent<LayoutTopLeftProps> {}
