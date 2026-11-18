import { SvelteComponent } from 'svelte';

export interface ChatStackXTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXTooltip extends SvelteComponent<ChatStackXTooltipProps> {}
