import { SvelteComponent } from 'svelte';

export interface AtSignSelect2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSignSelect2 extends SvelteComponent<AtSignSelect2Props> {}
