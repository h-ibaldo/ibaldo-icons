import { SvelteComponent } from 'svelte';

export interface TabDeleteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabDelete extends SvelteComponent<TabDeleteProps> {}
