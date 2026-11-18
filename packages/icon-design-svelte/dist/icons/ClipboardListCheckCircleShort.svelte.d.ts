import { SvelteComponent } from 'svelte';

export interface ClipboardListCheckCircleShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListCheckCircleShort extends SvelteComponent<ClipboardListCheckCircleShortProps> {}
