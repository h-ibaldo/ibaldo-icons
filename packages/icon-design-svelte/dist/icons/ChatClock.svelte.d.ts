import { SvelteComponent } from 'svelte';

export interface ChatClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatClock extends SvelteComponent<ChatClockProps> {}
