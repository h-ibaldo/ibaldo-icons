import { SvelteComponent } from 'svelte';

export interface CloudAlert2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudAlert2 extends SvelteComponent<CloudAlert2Props> {}
