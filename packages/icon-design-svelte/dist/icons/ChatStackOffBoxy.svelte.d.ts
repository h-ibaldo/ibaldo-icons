import { SvelteComponent } from 'svelte';

export interface ChatStackOffBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackOffBoxy extends SvelteComponent<ChatStackOffBoxyProps> {}
