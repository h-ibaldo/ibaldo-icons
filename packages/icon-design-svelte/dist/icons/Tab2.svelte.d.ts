import { SvelteComponent } from 'svelte';

export interface Tab2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab2 extends SvelteComponent<Tab2Props> {}
