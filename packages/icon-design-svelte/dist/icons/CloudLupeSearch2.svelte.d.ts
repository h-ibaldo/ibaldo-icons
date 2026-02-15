import { SvelteComponent } from 'svelte';

export interface CloudLupeSearch2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLupeSearch2 extends SvelteComponent<CloudLupeSearch2Props> {}
