import { SvelteComponent } from 'svelte';

export interface CloudLupeSearch3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLupeSearch3 extends SvelteComponent<CloudLupeSearch3Props> {}
