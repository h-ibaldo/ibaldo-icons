import { SvelteComponent } from 'svelte';

export interface CloudLupeSearch1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLupeSearch1 extends SvelteComponent<CloudLupeSearch1Props> {}
