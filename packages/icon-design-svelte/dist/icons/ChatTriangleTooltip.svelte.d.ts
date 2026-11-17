import { SvelteComponent } from 'svelte';

export interface ChatTriangleTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTriangleTooltip extends SvelteComponent<ChatTriangleTooltipProps> {}
