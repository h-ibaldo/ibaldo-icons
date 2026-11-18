import { SvelteComponent } from 'svelte';

export interface ChatStackCheckBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckBoxy extends SvelteComponent<ChatStackCheckBoxyProps> {}
