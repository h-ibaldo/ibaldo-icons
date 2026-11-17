import { SvelteComponent } from 'svelte';

export interface WindowSeal2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSeal2 extends SvelteComponent<WindowSeal2Props> {}
