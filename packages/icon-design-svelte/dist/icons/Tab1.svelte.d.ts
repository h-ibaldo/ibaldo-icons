import { SvelteComponent } from 'svelte';

export interface Tab1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab1 extends SvelteComponent<Tab1Props> {}
