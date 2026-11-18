import { SvelteComponent } from 'svelte';

export interface ChatDotsUnderscoreProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsUnderscore extends SvelteComponent<ChatDotsUnderscoreProps> {}
