import { SvelteComponent } from 'svelte';

export interface ConnectTriangle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ConnectTriangle2 extends SvelteComponent<ConnectTriangle2Props> {}
