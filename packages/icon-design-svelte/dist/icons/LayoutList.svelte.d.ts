import { SvelteComponent } from 'svelte';

export interface LayoutListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutList extends SvelteComponent<LayoutListProps> {}
