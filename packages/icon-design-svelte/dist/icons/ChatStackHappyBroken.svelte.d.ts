import { SvelteComponent } from 'svelte';

export interface ChatStackHappyBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHappyBroken extends SvelteComponent<ChatStackHappyBrokenProps> {}
