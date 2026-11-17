import { SvelteComponent } from 'svelte';

export interface CloudAdd2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudAdd2 extends SvelteComponent<CloudAdd2Props> {}
