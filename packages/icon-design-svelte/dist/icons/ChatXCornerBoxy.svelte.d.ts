import { SvelteComponent } from 'svelte';

export interface ChatXCornerBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCornerBoxy extends SvelteComponent<ChatXCornerBoxyProps> {}
