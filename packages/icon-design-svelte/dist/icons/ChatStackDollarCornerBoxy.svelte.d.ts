import { SvelteComponent } from 'svelte';

export interface ChatStackDollarCornerBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDollarCornerBoxy extends SvelteComponent<ChatStackDollarCornerBoxyProps> {}
