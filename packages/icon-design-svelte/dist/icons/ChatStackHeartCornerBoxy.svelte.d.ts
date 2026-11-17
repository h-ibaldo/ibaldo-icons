import { SvelteComponent } from 'svelte';

export interface ChatStackHeartCornerBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartCornerBoxy extends SvelteComponent<ChatStackHeartCornerBoxyProps> {}
