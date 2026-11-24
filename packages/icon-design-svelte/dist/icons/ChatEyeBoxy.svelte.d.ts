import { SvelteComponent } from 'svelte';

export interface ChatEyeBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEyeBoxy extends SvelteComponent<ChatEyeBoxyProps> {}
