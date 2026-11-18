import { SvelteComponent } from 'svelte';

export interface ChatLettersBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLettersBroken extends SvelteComponent<ChatLettersBrokenProps> {}
