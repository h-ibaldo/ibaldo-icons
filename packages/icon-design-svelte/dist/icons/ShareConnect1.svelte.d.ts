import { SvelteComponent } from 'svelte';

export interface ShareConnect1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShareConnect1 extends SvelteComponent<ShareConnect1Props> {}
