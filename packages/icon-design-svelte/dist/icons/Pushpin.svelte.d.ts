import { SvelteComponent } from 'svelte';

export interface PushpinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Pushpin extends SvelteComponent<PushpinProps> {}
