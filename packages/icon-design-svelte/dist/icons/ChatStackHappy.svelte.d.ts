import { SvelteComponent } from 'svelte';

export interface ChatStackHappyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHappy extends SvelteComponent<ChatStackHappyProps> {}
