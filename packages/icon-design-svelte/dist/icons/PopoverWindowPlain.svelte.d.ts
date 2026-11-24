import { SvelteComponent } from 'svelte';

export interface PopoverWindowPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PopoverWindowPlain extends SvelteComponent<PopoverWindowPlainProps> {}
