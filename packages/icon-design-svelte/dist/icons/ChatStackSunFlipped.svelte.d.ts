import { SvelteComponent } from 'svelte';

export interface ChatStackSunFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSunFlipped extends SvelteComponent<ChatStackSunFlippedProps> {}
