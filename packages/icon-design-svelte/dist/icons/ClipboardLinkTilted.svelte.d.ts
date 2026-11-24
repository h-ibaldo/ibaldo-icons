import { SvelteComponent } from 'svelte';

export interface ClipboardLinkTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardLinkTilted extends SvelteComponent<ClipboardLinkTiltedProps> {}
