import { SvelteComponent } from 'svelte';

export interface ConnectTriange1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ConnectTriange1 extends SvelteComponent<ConnectTriange1Props> {}
