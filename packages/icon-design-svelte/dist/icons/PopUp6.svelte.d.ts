import { SvelteComponent } from 'svelte';

export interface PopUp6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopUp6 extends SvelteComponent<PopUp6Props> {}
