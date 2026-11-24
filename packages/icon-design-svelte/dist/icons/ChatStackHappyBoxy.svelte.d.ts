import { SvelteComponent } from 'svelte';

export interface ChatStackHappyBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHappyBoxy extends SvelteComponent<ChatStackHappyBoxyProps> {}
