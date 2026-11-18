import { SvelteComponent } from 'svelte';

export interface ChatCheckCornerBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCornerBoxy extends SvelteComponent<ChatCheckCornerBoxyProps> {}
