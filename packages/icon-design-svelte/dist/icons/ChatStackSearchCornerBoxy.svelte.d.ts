import { SvelteComponent } from 'svelte';

export interface ChatStackSearchCornerBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSearchCornerBoxy extends SvelteComponent<ChatStackSearchCornerBoxyProps> {}
