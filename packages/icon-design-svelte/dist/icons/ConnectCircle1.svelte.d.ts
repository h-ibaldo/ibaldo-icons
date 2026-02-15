import { SvelteComponent } from 'svelte';

export interface ConnectCircle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ConnectCircle1 extends SvelteComponent<ConnectCircle1Props> {}
