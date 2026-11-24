import { SvelteComponent } from 'svelte';

export interface TabDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabDashed extends SvelteComponent<TabDashedProps> {}
