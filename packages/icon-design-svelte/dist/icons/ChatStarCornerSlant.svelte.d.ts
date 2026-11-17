import { SvelteComponent } from 'svelte';

export interface ChatStarCornerSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStarCornerSlant extends SvelteComponent<ChatStarCornerSlantProps> {}
