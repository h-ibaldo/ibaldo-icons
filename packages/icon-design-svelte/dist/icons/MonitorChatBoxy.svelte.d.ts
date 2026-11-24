import { SvelteComponent } from 'svelte';

export interface MonitorChatBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MonitorChatBoxy extends SvelteComponent<MonitorChatBoxyProps> {}
