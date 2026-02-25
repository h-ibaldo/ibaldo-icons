import { SvelteComponent } from 'svelte';

export interface PopUp7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopUp7 extends SvelteComponent<PopUp7Props> {}
