import { SvelteComponent } from 'svelte';

export interface ChatStackBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackBoxy extends SvelteComponent<ChatStackBoxyProps> {}
