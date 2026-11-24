import { SvelteComponent } from 'svelte';

export interface PopoverUpBigProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopoverUpBig extends SvelteComponent<PopoverUpBigProps> {}
