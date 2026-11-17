import { SvelteComponent } from 'svelte';

export interface ChatEyeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEye extends SvelteComponent<ChatEyeProps> {}
