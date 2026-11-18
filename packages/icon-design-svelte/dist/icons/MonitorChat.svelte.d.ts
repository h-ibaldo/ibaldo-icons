import { SvelteComponent } from 'svelte';

export interface MonitorChatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorChat extends SvelteComponent<MonitorChatProps> {}
