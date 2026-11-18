import { SvelteComponent } from 'svelte';

export interface ChatDotsCursorBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCursorBroken extends SvelteComponent<ChatDotsCursorBrokenProps> {}
