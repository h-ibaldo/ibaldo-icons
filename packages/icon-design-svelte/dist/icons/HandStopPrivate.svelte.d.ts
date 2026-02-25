import { SvelteComponent } from 'svelte';

export interface HandStopPrivateProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandStopPrivate extends SvelteComponent<HandStopPrivateProps> {}
