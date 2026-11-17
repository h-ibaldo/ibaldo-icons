import { SvelteComponent } from 'svelte';

export interface ChatPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPointed extends SvelteComponent<ChatPointedProps> {}
