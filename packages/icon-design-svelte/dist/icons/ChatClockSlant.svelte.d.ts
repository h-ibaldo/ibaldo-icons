import { SvelteComponent } from 'svelte';

export interface ChatClockSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatClockSlant extends SvelteComponent<ChatClockSlantProps> {}
