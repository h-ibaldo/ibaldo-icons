import { SvelteComponent } from 'svelte';

export interface ChatStackImageTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackImageTooltip extends SvelteComponent<ChatStackImageTooltipProps> {}
