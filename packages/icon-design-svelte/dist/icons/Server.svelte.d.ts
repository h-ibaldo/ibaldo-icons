import { SvelteComponent } from 'svelte';

export interface ServerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Server extends SvelteComponent<ServerProps> {}
