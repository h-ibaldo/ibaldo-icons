import { SvelteComponent } from 'svelte';

export interface ChatPlusPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusPointed extends SvelteComponent<ChatPlusPointedProps> {}
