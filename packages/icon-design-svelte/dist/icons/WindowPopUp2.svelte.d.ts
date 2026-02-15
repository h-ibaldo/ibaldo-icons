import { SvelteComponent } from 'svelte';

export interface WindowPopUp2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPopUp2 extends SvelteComponent<WindowPopUp2Props> {}
