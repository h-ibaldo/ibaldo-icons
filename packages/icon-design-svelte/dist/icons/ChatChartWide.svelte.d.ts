import { SvelteComponent } from 'svelte';

export interface ChatChartWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatChartWide extends SvelteComponent<ChatChartWideProps> {}
