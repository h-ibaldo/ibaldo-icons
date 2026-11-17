import { SvelteComponent } from 'svelte';

export interface ChatChartSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatChartSlant extends SvelteComponent<ChatChartSlantProps> {}
