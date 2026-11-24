import { SvelteComponent } from 'svelte';

export interface ChatMinusCornerBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCornerBoxy extends SvelteComponent<ChatMinusCornerBoxyProps> {}
