import { SvelteComponent } from 'svelte';

export interface ServerBanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ServerBan extends SvelteComponent<ServerBanProps> {}
