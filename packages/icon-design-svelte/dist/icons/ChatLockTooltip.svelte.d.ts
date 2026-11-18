import { SvelteComponent } from 'svelte';

export interface ChatLockTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockTooltip extends SvelteComponent<ChatLockTooltipProps> {}
