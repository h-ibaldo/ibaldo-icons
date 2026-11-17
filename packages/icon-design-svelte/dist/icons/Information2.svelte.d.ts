import { SvelteComponent } from 'svelte';

export interface Information2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Information2 extends SvelteComponent<Information2Props> {}
