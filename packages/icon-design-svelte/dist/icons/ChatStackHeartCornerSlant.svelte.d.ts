import { SvelteComponent } from 'svelte';

export interface ChatStackHeartCornerSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartCornerSlant extends SvelteComponent<ChatStackHeartCornerSlantProps> {}
