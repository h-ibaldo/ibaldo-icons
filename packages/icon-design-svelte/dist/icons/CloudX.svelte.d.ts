import { SvelteComponent } from 'svelte';

export interface CloudXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudX extends SvelteComponent<CloudXProps> {}
