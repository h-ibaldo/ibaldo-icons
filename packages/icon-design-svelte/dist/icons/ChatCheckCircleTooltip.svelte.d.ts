import { SvelteComponent } from 'svelte';

export interface ChatCheckCircleTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCircleTooltip extends SvelteComponent<ChatCheckCircleTooltipProps> {}
