import { SvelteComponent } from 'svelte';

export interface ChatStackBanCornerBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackBanCornerBoxy extends SvelteComponent<ChatStackBanCornerBoxyProps> {}
