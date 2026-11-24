import { SvelteComponent } from 'svelte';

export interface PopoverWindowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopoverWindow extends SvelteComponent<PopoverWindowProps> {}
