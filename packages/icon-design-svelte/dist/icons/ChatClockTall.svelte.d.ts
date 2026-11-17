import { SvelteComponent } from 'svelte';

export interface ChatClockTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatClockTall extends SvelteComponent<ChatClockTallProps> {}
