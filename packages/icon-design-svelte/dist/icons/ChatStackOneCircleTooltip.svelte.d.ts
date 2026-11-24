import { SvelteComponent } from 'svelte';

export interface ChatStackOneCircleTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOneCircleTooltip extends SvelteComponent<ChatStackOneCircleTooltipProps> {}
