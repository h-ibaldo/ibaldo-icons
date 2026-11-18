import { SvelteComponent } from 'svelte';

export interface ChatStackHashBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHashBoxy extends SvelteComponent<ChatStackHashBoxyProps> {}
