import { SvelteComponent } from 'svelte';

export interface MonitorChatSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorChatSlant extends SvelteComponent<MonitorChatSlantProps> {}
