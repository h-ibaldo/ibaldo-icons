import { SvelteComponent } from 'svelte';

export interface WindowPopUp3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPopUp3 extends SvelteComponent<WindowPopUp3Props> {}
