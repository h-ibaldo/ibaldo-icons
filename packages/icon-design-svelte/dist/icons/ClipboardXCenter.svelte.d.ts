import { SvelteComponent } from 'svelte';

export interface ClipboardXCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardXCenter extends SvelteComponent<ClipboardXCenterProps> {}
