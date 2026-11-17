import { SvelteComponent } from 'svelte';

export interface ChatStackClockSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackClockSlant extends SvelteComponent<ChatStackClockSlantProps> {}
