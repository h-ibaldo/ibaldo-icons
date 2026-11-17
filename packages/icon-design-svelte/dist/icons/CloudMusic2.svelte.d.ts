import { SvelteComponent } from 'svelte';

export interface CloudMusic2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMusic2 extends SvelteComponent<CloudMusic2Props> {}
