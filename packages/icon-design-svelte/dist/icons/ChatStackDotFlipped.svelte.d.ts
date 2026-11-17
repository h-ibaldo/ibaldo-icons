import { SvelteComponent } from 'svelte';

export interface ChatStackDotFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotFlipped extends SvelteComponent<ChatStackDotFlippedProps> {}
