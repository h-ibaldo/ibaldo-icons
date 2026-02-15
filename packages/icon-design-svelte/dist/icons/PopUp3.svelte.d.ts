import { SvelteComponent } from 'svelte';

export interface PopUp3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopUp3 extends SvelteComponent<PopUp3Props> {}
