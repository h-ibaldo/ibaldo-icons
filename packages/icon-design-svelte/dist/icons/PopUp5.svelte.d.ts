import { SvelteComponent } from 'svelte';

export interface PopUp5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopUp5 extends SvelteComponent<PopUp5Props> {}
