import { SvelteComponent } from 'svelte';

export interface TabWrenchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabWrench extends SvelteComponent<TabWrenchProps> {}
