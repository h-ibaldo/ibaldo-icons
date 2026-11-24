import { SvelteComponent } from 'svelte';

export interface CloudSearch2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSearch2 extends SvelteComponent<CloudSearch2Props> {}
