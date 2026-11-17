import { SvelteComponent } from 'svelte';

export interface ClipboardXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardXCircle extends SvelteComponent<ClipboardXCircleProps> {}
