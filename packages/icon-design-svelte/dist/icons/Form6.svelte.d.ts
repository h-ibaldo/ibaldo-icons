import { SvelteComponent } from 'svelte';

export interface Form6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Form6 extends SvelteComponent<Form6Props> {}
