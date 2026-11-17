import { SvelteComponent } from 'svelte';

export interface ChatForwardCornerBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardCornerBroken extends SvelteComponent<ChatForwardCornerBrokenProps> {}
