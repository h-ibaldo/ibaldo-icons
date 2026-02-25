import { SvelteComponent } from 'svelte';

export interface ConnectCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ConnectCircle2 extends SvelteComponent<ConnectCircle2Props> {}
