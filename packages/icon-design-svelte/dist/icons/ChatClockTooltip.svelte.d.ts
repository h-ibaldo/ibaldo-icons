import { SvelteComponent } from 'svelte';

export interface ChatClockTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatClockTooltip extends SvelteComponent<ChatClockTooltipProps> {}
