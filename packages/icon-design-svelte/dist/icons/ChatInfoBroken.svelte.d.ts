import { SvelteComponent } from 'svelte';

export interface ChatInfoBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatInfoBroken extends SvelteComponent<ChatInfoBrokenProps> {}
