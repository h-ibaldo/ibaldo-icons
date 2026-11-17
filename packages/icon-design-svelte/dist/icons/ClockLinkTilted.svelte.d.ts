import { SvelteComponent } from 'svelte';

export interface ClockLinkTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockLinkTilted extends SvelteComponent<ClockLinkTiltedProps> {}
