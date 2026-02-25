import { SvelteComponent } from 'svelte';

export interface ConnectTriange2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ConnectTriange2 extends SvelteComponent<ConnectTriange2Props> {}
