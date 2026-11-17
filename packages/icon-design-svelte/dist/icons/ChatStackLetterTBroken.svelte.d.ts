import { SvelteComponent } from 'svelte';

export interface ChatStackLetterTBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLetterTBroken extends SvelteComponent<ChatStackLetterTBrokenProps> {}
