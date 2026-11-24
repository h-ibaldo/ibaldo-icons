import { SvelteComponent } from 'svelte';

export interface ChatStackOffTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOffTooltip extends SvelteComponent<ChatStackOffTooltipProps> {}
