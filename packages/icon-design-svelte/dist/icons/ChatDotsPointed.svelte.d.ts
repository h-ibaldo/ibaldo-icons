import { SvelteComponent } from 'svelte';

export interface ChatDotsPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsPointed extends SvelteComponent<ChatDotsPointedProps> {}
