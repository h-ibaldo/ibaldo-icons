import { SvelteComponent } from 'svelte';

export interface ChatPlusCirclePointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCirclePointed extends SvelteComponent<ChatPlusCirclePointedProps> {}
