import { SvelteComponent } from 'svelte';

export interface ClipboardCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardCheckCircle extends SvelteComponent<ClipboardCheckCircleProps> {}
