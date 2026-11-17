import { SvelteComponent } from 'svelte';

export interface PopoverListUpBigProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopoverListUpBig extends SvelteComponent<PopoverListUpBigProps> {}
