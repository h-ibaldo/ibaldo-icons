import { SvelteComponent } from 'svelte';

export interface ChatQuoteBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatQuoteBroken extends SvelteComponent<ChatQuoteBrokenProps> {}
