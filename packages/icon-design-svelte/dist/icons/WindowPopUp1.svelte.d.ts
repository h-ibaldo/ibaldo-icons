import { SvelteComponent } from 'svelte';

export interface WindowPopUp1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPopUp1 extends SvelteComponent<WindowPopUp1Props> {}
