import { SvelteComponent } from 'svelte';

export interface ChatStackDotsCursorSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsCursorSlant extends SvelteComponent<ChatStackDotsCursorSlantProps> {}
