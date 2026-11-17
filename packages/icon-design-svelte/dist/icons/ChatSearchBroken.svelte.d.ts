import { SvelteComponent } from 'svelte';

export interface ChatSearchBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSearchBroken extends SvelteComponent<ChatSearchBrokenProps> {}
