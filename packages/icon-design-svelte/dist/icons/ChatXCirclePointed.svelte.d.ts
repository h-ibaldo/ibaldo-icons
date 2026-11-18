import { SvelteComponent } from 'svelte';

export interface ChatXCirclePointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCirclePointed extends SvelteComponent<ChatXCirclePointedProps> {}
