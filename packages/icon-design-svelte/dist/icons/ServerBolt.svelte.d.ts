import { SvelteComponent } from 'svelte';

export interface ServerBoltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ServerBolt extends SvelteComponent<ServerBoltProps> {}
