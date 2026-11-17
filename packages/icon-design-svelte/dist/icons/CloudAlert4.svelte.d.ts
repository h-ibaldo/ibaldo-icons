import { SvelteComponent } from 'svelte';

export interface CloudAlert4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudAlert4 extends SvelteComponent<CloudAlert4Props> {}
