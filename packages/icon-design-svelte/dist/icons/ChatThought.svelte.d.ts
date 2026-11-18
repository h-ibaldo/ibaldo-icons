import { SvelteComponent } from 'svelte';

export interface ChatThoughtProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatThought extends SvelteComponent<ChatThoughtProps> {}
