import { SvelteComponent } from 'svelte';

export interface ChatTextPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextPointed extends SvelteComponent<ChatTextPointedProps> {}
