import { SvelteComponent } from 'svelte';

export interface Form4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Form4 extends SvelteComponent<Form4Props> {}
