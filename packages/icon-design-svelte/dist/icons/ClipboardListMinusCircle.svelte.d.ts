import { SvelteComponent } from 'svelte';

export interface ClipboardListMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListMinusCircle extends SvelteComponent<ClipboardListMinusCircleProps> {}
