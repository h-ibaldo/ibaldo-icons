import { SvelteComponent } from 'svelte';

export interface ChatStackLetterTTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLetterTTooltip extends SvelteComponent<ChatStackLetterTTooltipProps> {}
