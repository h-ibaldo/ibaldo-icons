import { SvelteComponent } from 'svelte';

export interface ChatMinusBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusBoxy extends SvelteComponent<ChatMinusBoxyProps> {}
