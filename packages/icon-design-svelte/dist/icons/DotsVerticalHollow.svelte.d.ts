import { SvelteComponent } from 'svelte';

export interface DotsVerticalHollowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DotsVerticalHollow extends SvelteComponent<DotsVerticalHollowProps> {}
