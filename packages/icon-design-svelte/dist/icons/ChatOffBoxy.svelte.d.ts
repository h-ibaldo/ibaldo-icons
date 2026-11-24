import { SvelteComponent } from 'svelte';

export interface ChatOffBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOffBoxy extends SvelteComponent<ChatOffBoxyProps> {}
