import { SvelteComponent } from 'svelte';

export interface ChatStackForwardCornerFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackForwardCornerFlipped extends SvelteComponent<ChatStackForwardCornerFlippedProps> {}
