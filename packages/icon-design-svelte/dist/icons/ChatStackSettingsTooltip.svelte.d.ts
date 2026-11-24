import { SvelteComponent } from 'svelte';

export interface ChatStackSettingsTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSettingsTooltip extends SvelteComponent<ChatStackSettingsTooltipProps> {}
