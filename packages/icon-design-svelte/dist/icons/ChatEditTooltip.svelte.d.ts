import { SvelteComponent } from 'svelte';

export interface ChatEditTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEditTooltip extends SvelteComponent<ChatEditTooltipProps> {}
