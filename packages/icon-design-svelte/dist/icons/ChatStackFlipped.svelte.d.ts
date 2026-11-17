import { SvelteComponent } from 'svelte';

export interface ChatStackFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackFlipped extends SvelteComponent<ChatStackFlippedProps> {}
