import { SvelteComponent } from 'svelte';

export interface CloudClose2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudClose2 extends SvelteComponent<CloudClose2Props> {}
