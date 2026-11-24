import { SvelteComponent } from 'svelte';

export interface ChatStackClockFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackClockFlipped extends SvelteComponent<ChatStackClockFlippedProps> {}
