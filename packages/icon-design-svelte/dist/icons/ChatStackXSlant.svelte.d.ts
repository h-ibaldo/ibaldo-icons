import { SvelteComponent } from 'svelte';

export interface ChatStackXSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXSlant extends SvelteComponent<ChatStackXSlantProps> {}
