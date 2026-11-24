import { SvelteComponent } from 'svelte';

export interface ChatUnderlineTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUnderlineTooltip extends SvelteComponent<ChatUnderlineTooltipProps> {}
