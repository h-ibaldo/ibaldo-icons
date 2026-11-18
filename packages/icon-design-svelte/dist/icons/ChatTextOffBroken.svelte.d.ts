import { SvelteComponent } from 'svelte';

export interface ChatTextOffBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextOffBroken extends SvelteComponent<ChatTextOffBrokenProps> {}
