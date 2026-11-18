import { SvelteComponent } from 'svelte';

export interface ChatMinusCirclePointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCirclePointed extends SvelteComponent<ChatMinusCirclePointedProps> {}
