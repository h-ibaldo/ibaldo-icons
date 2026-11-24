import { SvelteComponent } from 'svelte';

export interface ChatStarCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStarCorner extends SvelteComponent<ChatStarCornerProps> {}
