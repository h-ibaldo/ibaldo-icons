import { SvelteComponent } from 'svelte';

export interface ChatStackXCornerFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXCornerFlipped extends SvelteComponent<ChatStackXCornerFlippedProps> {}
