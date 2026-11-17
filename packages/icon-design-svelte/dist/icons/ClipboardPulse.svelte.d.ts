import { SvelteComponent } from 'svelte';

export interface ClipboardPulseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardPulse extends SvelteComponent<ClipboardPulseProps> {}
