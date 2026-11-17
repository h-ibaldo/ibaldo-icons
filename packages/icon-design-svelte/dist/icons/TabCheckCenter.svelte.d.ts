import { SvelteComponent } from 'svelte';

export interface TabCheckCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckCenter extends SvelteComponent<TabCheckCenterProps> {}
