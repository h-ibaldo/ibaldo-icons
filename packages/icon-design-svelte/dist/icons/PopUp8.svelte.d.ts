import { SvelteComponent } from 'svelte';

export interface PopUp8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopUp8 extends SvelteComponent<PopUp8Props> {}
