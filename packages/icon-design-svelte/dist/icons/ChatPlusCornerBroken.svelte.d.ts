import { SvelteComponent } from 'svelte';

export interface ChatPlusCornerBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCornerBroken extends SvelteComponent<ChatPlusCornerBrokenProps> {}
