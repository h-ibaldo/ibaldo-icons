import { SvelteComponent } from 'svelte';

export interface ChatChartBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatChartBoxy extends SvelteComponent<ChatChartBoxyProps> {}
