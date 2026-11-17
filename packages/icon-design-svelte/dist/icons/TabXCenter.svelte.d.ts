import { SvelteComponent } from 'svelte';

export interface TabXCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabXCenter extends SvelteComponent<TabXCenterProps> {}
