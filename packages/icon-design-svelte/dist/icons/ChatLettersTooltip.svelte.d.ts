import { SvelteComponent } from 'svelte';

export interface ChatLettersTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLettersTooltip extends SvelteComponent<ChatLettersTooltipProps> {}
