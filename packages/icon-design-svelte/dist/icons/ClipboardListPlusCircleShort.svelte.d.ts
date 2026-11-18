import { SvelteComponent } from 'svelte';

export interface ClipboardListPlusCircleShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListPlusCircleShort extends SvelteComponent<ClipboardListPlusCircleShortProps> {}
