import { SvelteComponent } from 'svelte';

export interface ChatChartTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatChartTooltip extends SvelteComponent<ChatChartTooltipProps> {}
