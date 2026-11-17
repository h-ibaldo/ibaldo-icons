import { SvelteComponent } from 'svelte';

export interface WindowWrench2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowWrench2 extends SvelteComponent<WindowWrench2Props> {}
