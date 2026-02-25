import { SvelteComponent } from 'svelte';

export interface PopUp1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopUp1 extends SvelteComponent<PopUp1Props> {}
