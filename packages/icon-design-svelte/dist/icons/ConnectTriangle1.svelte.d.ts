import { SvelteComponent } from 'svelte';

export interface ConnectTriangle1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ConnectTriangle1 extends SvelteComponent<ConnectTriangle1Props> {}
