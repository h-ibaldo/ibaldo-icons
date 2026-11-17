import { SvelteComponent } from 'svelte';

export interface ChatDotBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotBroken extends SvelteComponent<ChatDotBrokenProps> {}
