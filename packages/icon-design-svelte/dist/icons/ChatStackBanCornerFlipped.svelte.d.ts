import { SvelteComponent } from 'svelte';

export interface ChatStackBanCornerFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackBanCornerFlipped extends SvelteComponent<ChatStackBanCornerFlippedProps> {}
