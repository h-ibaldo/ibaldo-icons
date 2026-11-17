import { SvelteComponent } from 'svelte';

export interface Lock2Check2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock2Check2 extends SvelteComponent<Lock2Check2Props> {}
