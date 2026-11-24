import { SvelteComponent } from 'svelte';

export interface ChatStackUnderlineTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackUnderlineTooltip extends SvelteComponent<ChatStackUnderlineTooltipProps> {}
