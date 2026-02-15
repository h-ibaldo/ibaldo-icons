import { SvelteComponent } from 'svelte';

export interface WindowsPopUp2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowsPopUp2 extends SvelteComponent<WindowsPopUp2Props> {}
