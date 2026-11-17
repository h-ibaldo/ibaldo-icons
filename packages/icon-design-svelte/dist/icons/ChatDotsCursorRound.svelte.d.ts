import { SvelteComponent } from 'svelte';

export interface ChatDotsCursorRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCursorRound extends SvelteComponent<ChatDotsCursorRoundProps> {}
