import { SvelteComponent } from 'svelte';

export interface ChatOffBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOffBroken extends SvelteComponent<ChatOffBrokenProps> {}
