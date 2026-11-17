import { SvelteComponent } from 'svelte';

export interface CloudSynchronize2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSynchronize2 extends SvelteComponent<CloudSynchronize2Props> {}
