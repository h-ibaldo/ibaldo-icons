import { SvelteComponent } from 'svelte';

export interface ChatLetterTTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLetterTTooltip extends SvelteComponent<ChatLetterTTooltipProps> {}
