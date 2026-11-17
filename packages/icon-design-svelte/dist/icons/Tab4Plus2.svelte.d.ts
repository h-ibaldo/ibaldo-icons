import { SvelteComponent } from 'svelte';

export interface Tab4Plus2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4Plus2 extends SvelteComponent<Tab4Plus2Props> {}
