import { SvelteComponent } from 'svelte';

export interface ChatCheckBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckBoxy extends SvelteComponent<ChatCheckBoxyProps> {}
