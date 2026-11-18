import { SvelteComponent } from 'svelte';

export interface ChatStackDotsVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsVertical extends SvelteComponent<ChatStackDotsVerticalProps> {}
