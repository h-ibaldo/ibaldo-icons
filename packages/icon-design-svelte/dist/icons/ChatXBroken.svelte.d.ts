import { SvelteComponent } from 'svelte';

export interface ChatXBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXBroken extends SvelteComponent<ChatXBrokenProps> {}
