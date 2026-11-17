import { SvelteComponent } from 'svelte';

export interface ChatStackOffFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOffFlipped extends SvelteComponent<ChatStackOffFlippedProps> {}
