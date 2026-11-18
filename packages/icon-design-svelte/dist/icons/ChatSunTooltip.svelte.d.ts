import { SvelteComponent } from 'svelte';

export interface ChatSunTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSunTooltip extends SvelteComponent<ChatSunTooltipProps> {}
