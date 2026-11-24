import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleCornerBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleCornerBoxy extends SvelteComponent<ChatCheckDoubleCornerBoxyProps> {}
