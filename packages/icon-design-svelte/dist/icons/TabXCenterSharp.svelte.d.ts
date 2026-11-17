import { SvelteComponent } from 'svelte';

export interface TabXCenterSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabXCenterSharp extends SvelteComponent<TabXCenterSharpProps> {}
