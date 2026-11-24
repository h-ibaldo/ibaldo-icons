import { SvelteComponent } from 'svelte';

export interface ChatEyeSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEyeSlant extends SvelteComponent<ChatEyeSlantProps> {}
