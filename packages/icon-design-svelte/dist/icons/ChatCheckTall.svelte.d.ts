import { SvelteComponent } from 'svelte';

export interface ChatCheckTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckTall extends SvelteComponent<ChatCheckTallProps> {}
