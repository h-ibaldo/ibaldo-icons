import { SvelteComponent } from 'svelte';

export interface ChatChartBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatChartBroken extends SvelteComponent<ChatChartBrokenProps> {}
