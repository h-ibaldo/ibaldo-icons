import { SvelteComponent } from 'svelte';

export interface Scanner4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Scanner4 extends SvelteComponent<Scanner4Props> {}
