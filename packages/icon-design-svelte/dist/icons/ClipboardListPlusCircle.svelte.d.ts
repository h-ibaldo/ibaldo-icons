import { SvelteComponent } from 'svelte';

export interface ClipboardListPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListPlusCircle extends SvelteComponent<ClipboardListPlusCircleProps> {}
