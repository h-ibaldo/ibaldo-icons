import { SvelteComponent } from 'svelte';

export interface ChatStackLaughBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLaughBroken extends SvelteComponent<ChatStackLaughBrokenProps> {}
