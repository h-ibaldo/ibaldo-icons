import { SvelteComponent } from 'svelte';

export interface ConnectCircle3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ConnectCircle3 extends SvelteComponent<ConnectCircle3Props> {}
