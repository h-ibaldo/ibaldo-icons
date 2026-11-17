import { SvelteComponent } from 'svelte';

export interface House8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House8 extends SvelteComponent<House8Props> {}
