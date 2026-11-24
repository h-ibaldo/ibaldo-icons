import { SvelteComponent } from 'svelte';

export interface ChatStackClockBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackClockBoxy extends SvelteComponent<ChatStackClockBoxyProps> {}
