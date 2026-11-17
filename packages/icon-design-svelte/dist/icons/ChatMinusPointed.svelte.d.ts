import { SvelteComponent } from 'svelte';

export interface ChatMinusPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusPointed extends SvelteComponent<ChatMinusPointedProps> {}
