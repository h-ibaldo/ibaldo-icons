import { SvelteComponent } from 'svelte';

export interface ChatStackSunBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSunBoxy extends SvelteComponent<ChatStackSunBoxyProps> {}
