import { SvelteComponent } from 'svelte';

export interface WindowPopUp4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPopUp4 extends SvelteComponent<WindowPopUp4Props> {}
