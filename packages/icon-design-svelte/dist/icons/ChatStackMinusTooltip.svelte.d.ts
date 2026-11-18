import { SvelteComponent } from 'svelte';

export interface ChatStackMinusTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusTooltip extends SvelteComponent<ChatStackMinusTooltipProps> {}
