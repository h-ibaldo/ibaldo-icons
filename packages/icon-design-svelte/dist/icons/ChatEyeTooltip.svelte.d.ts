import { SvelteComponent } from 'svelte';

export interface ChatEyeTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEyeTooltip extends SvelteComponent<ChatEyeTooltipProps> {}
