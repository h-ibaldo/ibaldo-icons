import { SvelteComponent } from 'svelte';

export interface WindowCloud2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCloud2 extends SvelteComponent<WindowCloud2Props> {}
