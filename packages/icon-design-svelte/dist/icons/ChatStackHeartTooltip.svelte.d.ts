import { SvelteComponent } from 'svelte';

export interface ChatStackHeartTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartTooltip extends SvelteComponent<ChatStackHeartTooltipProps> {}
