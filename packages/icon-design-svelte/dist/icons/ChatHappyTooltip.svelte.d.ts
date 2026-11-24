import { SvelteComponent } from 'svelte';

export interface ChatHappyTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHappyTooltip extends SvelteComponent<ChatHappyTooltipProps> {}
