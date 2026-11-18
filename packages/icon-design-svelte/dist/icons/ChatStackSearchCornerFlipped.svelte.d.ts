import { SvelteComponent } from 'svelte';

export interface ChatStackSearchCornerFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSearchCornerFlipped extends SvelteComponent<ChatStackSearchCornerFlippedProps> {}
