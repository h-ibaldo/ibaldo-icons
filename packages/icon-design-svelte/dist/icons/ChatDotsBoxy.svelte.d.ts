import { SvelteComponent } from 'svelte';

export interface ChatDotsBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsBoxy extends SvelteComponent<ChatDotsBoxyProps> {}
