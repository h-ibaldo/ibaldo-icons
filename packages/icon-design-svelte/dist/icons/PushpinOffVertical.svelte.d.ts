import { SvelteComponent } from 'svelte';

export interface PushpinOffVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PushpinOffVertical extends SvelteComponent<PushpinOffVerticalProps> {}
