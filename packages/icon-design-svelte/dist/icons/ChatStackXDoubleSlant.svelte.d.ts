import { SvelteComponent } from 'svelte';

export interface ChatStackXDoubleSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXDoubleSlant extends SvelteComponent<ChatStackXDoubleSlantProps> {}
