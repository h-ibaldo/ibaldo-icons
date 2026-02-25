import { SvelteComponent } from 'svelte';

export interface ShareConnect2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShareConnect2 extends SvelteComponent<ShareConnect2Props> {}
