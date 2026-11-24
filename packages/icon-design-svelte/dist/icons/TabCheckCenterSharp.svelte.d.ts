import { SvelteComponent } from 'svelte';

export interface TabCheckCenterSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckCenterSharp extends SvelteComponent<TabCheckCenterSharpProps> {}
