import { SvelteComponent } from 'svelte';

export interface PushpinVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PushpinVertical extends SvelteComponent<PushpinVerticalProps> {}
