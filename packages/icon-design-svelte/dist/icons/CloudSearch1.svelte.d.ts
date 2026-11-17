import { SvelteComponent } from 'svelte';

export interface CloudSearch1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSearch1 extends SvelteComponent<CloudSearch1Props> {}
