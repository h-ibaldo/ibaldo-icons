import { SvelteComponent } from 'svelte';

export interface ChatXTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXTooltip extends SvelteComponent<ChatXTooltipProps> {}
