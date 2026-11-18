import { SvelteComponent } from 'svelte';

export interface ChatHappyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHappy extends SvelteComponent<ChatHappyProps> {}
