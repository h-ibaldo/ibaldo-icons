import { SvelteComponent } from 'svelte';

export interface ChatXDoubleBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXDoubleBroken extends SvelteComponent<ChatXDoubleBrokenProps> {}
