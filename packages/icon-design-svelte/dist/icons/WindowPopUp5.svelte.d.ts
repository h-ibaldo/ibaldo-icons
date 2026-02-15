import { SvelteComponent } from 'svelte';

export interface WindowPopUp5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPopUp5 extends SvelteComponent<WindowPopUp5Props> {}
