import { SvelteComponent } from 'svelte';

export interface ChatStackDotsVerticalFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsVerticalFlipped extends SvelteComponent<ChatStackDotsVerticalFlippedProps> {}
