import { SvelteComponent } from 'svelte';

export interface WindowsPopUp1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowsPopUp1 extends SvelteComponent<WindowsPopUp1Props> {}
