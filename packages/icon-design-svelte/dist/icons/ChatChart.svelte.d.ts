import { SvelteComponent } from 'svelte';

export interface ChatChartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatChart extends SvelteComponent<ChatChartProps> {}
