import { SvelteComponent } from 'svelte';

export interface TabDashedUnselectedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabDashedUnselected extends SvelteComponent<TabDashedUnselectedProps> {}
