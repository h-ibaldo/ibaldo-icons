import { SvelteComponent } from 'svelte';

export interface ChatHashBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHashBoxy extends SvelteComponent<ChatHashBoxyProps> {}
