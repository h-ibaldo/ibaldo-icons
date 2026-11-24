import { SvelteComponent } from 'svelte';

export interface ClipboardPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardPlusCircle extends SvelteComponent<ClipboardPlusCircleProps> {}
