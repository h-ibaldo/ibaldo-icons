import { SvelteComponent } from 'svelte';

export interface ClipboardCheckCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardCheckCenter extends SvelteComponent<ClipboardCheckCenterProps> {}
