import { SvelteComponent } from 'svelte';

export interface ChatUserTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUserTooltip extends SvelteComponent<ChatUserTooltipProps> {}
