import { SvelteComponent } from 'svelte';

export interface ChatXCornerBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCornerBroken extends SvelteComponent<ChatXCornerBrokenProps> {}
