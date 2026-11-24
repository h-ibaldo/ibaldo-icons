import { SvelteComponent } from 'svelte';

export interface ChatStackClockLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackClockLayered extends SvelteComponent<ChatStackClockLayeredProps> {}
