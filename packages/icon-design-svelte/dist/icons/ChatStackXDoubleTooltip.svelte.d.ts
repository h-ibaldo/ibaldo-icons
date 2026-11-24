import { SvelteComponent } from 'svelte';

export interface ChatStackXDoubleTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXDoubleTooltip extends SvelteComponent<ChatStackXDoubleTooltipProps> {}
