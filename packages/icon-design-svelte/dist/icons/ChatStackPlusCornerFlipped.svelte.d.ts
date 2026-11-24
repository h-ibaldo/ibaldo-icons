import { SvelteComponent } from 'svelte';

export interface ChatStackPlusCornerFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackPlusCornerFlipped extends SvelteComponent<ChatStackPlusCornerFlippedProps> {}
