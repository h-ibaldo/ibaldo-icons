import { SvelteComponent } from 'svelte';

export interface ChatDotsCursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCursor extends SvelteComponent<ChatDotsCursorProps> {}
