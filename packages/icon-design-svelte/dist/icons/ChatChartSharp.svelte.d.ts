import { SvelteComponent } from 'svelte';

export interface ChatChartSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatChartSharp extends SvelteComponent<ChatChartSharpProps> {}
