import { SvelteComponent } from 'svelte';

export interface ChatStackBanCornerSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackBanCornerSlant extends SvelteComponent<ChatStackBanCornerSlantProps> {}
