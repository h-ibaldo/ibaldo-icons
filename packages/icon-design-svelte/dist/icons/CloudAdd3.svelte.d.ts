import { SvelteComponent } from 'svelte';

export interface CloudAdd3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudAdd3 extends SvelteComponent<CloudAdd3Props> {}
