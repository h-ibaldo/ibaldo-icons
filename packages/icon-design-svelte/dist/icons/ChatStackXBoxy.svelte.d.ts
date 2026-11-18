import { SvelteComponent } from 'svelte';

export interface ChatStackXBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXBoxy extends SvelteComponent<ChatStackXBoxyProps> {}
