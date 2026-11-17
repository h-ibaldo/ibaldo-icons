import { SvelteComponent } from 'svelte';

export interface ChatStackClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackClock extends SvelteComponent<ChatStackClockProps> {}
