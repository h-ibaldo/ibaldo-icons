import { SvelteComponent } from 'svelte';

export interface PopoverListBigProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopoverListBig extends SvelteComponent<PopoverListBigProps> {}
