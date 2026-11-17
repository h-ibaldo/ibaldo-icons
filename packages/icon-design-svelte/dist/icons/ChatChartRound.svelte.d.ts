import { SvelteComponent } from 'svelte';

export interface ChatChartRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatChartRound extends SvelteComponent<ChatChartRoundProps> {}
