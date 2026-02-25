import { SvelteComponent } from 'svelte';

export interface ConnectRandom1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ConnectRandom1 extends SvelteComponent<ConnectRandom1Props> {}
