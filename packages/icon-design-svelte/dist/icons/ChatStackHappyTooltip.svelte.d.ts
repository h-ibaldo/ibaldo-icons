import { SvelteComponent } from 'svelte';

export interface ChatStackHappyTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHappyTooltip extends SvelteComponent<ChatStackHappyTooltipProps> {}
