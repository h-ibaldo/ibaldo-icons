import { SvelteComponent } from 'svelte';

export interface TabProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab extends SvelteComponent<TabProps> {}
