import { SvelteComponent } from 'svelte';

export interface ChatEqualsTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEqualsTooltip extends SvelteComponent<ChatEqualsTooltipProps> {}
