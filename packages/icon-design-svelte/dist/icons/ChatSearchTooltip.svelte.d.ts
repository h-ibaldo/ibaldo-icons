import { SvelteComponent } from 'svelte';

export interface ChatSearchTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSearchTooltip extends SvelteComponent<ChatSearchTooltipProps> {}
