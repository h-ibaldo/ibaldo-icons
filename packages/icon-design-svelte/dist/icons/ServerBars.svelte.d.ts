import { SvelteComponent } from 'svelte';

export interface ServerBarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ServerBars extends SvelteComponent<ServerBarsProps> {}
