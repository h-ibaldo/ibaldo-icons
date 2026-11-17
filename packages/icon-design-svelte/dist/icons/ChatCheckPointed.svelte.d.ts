import { SvelteComponent } from 'svelte';

export interface ChatCheckPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckPointed extends SvelteComponent<ChatCheckPointedProps> {}
