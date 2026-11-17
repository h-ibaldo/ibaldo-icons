import { SvelteComponent } from 'svelte';

export interface ChatDotsVerticalPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsVerticalPointed extends SvelteComponent<ChatDotsVerticalPointedProps> {}
