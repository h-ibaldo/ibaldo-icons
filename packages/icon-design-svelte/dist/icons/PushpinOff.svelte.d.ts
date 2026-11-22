import { SvelteComponent } from 'svelte';

export interface PushpinOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PushpinOff extends SvelteComponent<PushpinOffProps> {}
