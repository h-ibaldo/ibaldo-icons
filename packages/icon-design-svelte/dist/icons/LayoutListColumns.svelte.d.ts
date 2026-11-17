import { SvelteComponent } from 'svelte';

export interface LayoutListColumnsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutListColumns extends SvelteComponent<LayoutListColumnsProps> {}
