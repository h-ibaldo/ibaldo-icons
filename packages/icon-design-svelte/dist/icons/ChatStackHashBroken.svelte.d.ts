import { SvelteComponent } from 'svelte';

export interface ChatStackHashBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHashBroken extends SvelteComponent<ChatStackHashBrokenProps> {}
