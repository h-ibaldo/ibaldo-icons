import { SvelteComponent } from 'svelte';

export interface ChatStackClockTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackClockTooltip extends SvelteComponent<ChatStackClockTooltipProps> {}
