import { SvelteComponent } from 'svelte';

export interface CloudAlert3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudAlert3 extends SvelteComponent<CloudAlert3Props> {}
