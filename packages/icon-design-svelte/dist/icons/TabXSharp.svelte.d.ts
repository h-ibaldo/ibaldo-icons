import { SvelteComponent } from 'svelte';

export interface TabXSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabXSharp extends SvelteComponent<TabXSharpProps> {}
