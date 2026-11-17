import { SvelteComponent } from 'svelte';

export interface SirenAlert2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SirenAlert2 extends SvelteComponent<SirenAlert2Props> {}
