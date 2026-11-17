import { SvelteComponent } from 'svelte';

export interface AtSign5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign5 extends SvelteComponent<AtSign5Props> {}
