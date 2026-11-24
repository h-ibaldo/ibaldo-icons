import { SvelteComponent } from 'svelte';

export interface ChatStackInfoBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackInfoBoxy extends SvelteComponent<ChatStackInfoBoxyProps> {}
