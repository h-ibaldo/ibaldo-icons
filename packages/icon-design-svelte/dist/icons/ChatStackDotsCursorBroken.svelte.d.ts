import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCursorBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCursorBroken extends SvelteComponent<ChatStackDotsCursorBrokenProps> {}
