import { SvelteComponent } from 'svelte';

export interface ChatLaughBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLaughBroken extends SvelteComponent<ChatLaughBrokenProps> {}
