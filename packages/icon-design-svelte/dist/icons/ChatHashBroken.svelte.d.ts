import { SvelteComponent } from 'svelte';

export interface ChatHashBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHashBroken extends SvelteComponent<ChatHashBrokenProps> {}
