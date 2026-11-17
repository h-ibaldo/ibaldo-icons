import { SvelteComponent } from 'svelte';

export interface CloudSearch3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSearch3 extends SvelteComponent<CloudSearch3Props> {}
