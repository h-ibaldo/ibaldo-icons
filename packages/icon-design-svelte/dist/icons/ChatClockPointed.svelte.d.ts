import { SvelteComponent } from 'svelte';

export interface ChatClockPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatClockPointed extends SvelteComponent<ChatClockPointedProps> {}
