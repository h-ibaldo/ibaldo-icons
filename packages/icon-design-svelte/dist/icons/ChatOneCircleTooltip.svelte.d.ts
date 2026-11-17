import { SvelteComponent } from 'svelte';

export interface ChatOneCircleTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOneCircleTooltip extends SvelteComponent<ChatOneCircleTooltipProps> {}
