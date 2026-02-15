import { SvelteComponent } from 'svelte';

export interface PopUp2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopUp2 extends SvelteComponent<PopUp2Props> {}
