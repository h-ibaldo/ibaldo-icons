import { SvelteComponent } from 'svelte';

export interface ChatStackClockBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackClockBroken extends SvelteComponent<ChatStackClockBrokenProps> {}
