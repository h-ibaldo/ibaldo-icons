import { SvelteComponent } from 'svelte';

export interface ChatHeartTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHeartTooltip extends SvelteComponent<ChatHeartTooltipProps> {}
