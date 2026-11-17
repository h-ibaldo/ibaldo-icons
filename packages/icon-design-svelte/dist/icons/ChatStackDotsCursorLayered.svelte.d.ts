import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCursorLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCursorLayered extends SvelteComponent<ChatStackDotsCursorLayeredProps> {}
