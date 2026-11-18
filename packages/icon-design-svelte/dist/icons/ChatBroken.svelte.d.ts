import { SvelteComponent } from 'svelte';

export interface ChatBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatBroken extends SvelteComponent<ChatBrokenProps> {}
