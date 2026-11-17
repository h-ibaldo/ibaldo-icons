import { SvelteComponent } from 'svelte';

export interface ChatStackHeartCornerFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartCornerFlipped extends SvelteComponent<ChatStackHeartCornerFlippedProps> {}
