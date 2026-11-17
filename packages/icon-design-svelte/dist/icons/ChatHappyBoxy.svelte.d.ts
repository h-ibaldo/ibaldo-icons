import { SvelteComponent } from 'svelte';

export interface ChatHappyBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHappyBoxy extends SvelteComponent<ChatHappyBoxyProps> {}
