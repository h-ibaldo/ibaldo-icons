import { SvelteComponent } from 'svelte';

export interface ChatLaughTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLaughTooltip extends SvelteComponent<ChatLaughTooltipProps> {}
