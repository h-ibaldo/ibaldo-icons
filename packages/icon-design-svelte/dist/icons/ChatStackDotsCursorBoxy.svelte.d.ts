import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCursorBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCursorBoxy extends SvelteComponent<ChatStackDotsCursorBoxyProps> {}
