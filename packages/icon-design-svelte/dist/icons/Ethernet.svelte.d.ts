import { SvelteComponent } from 'svelte';

export interface EthernetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Ethernet extends SvelteComponent<EthernetProps> {}
