import { SvelteComponent } from 'svelte';

export interface ClipboardMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardMinusCircle extends SvelteComponent<ClipboardMinusCircleProps> {}
