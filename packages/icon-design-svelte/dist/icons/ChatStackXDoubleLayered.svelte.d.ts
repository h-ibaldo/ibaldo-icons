import { SvelteComponent } from 'svelte';

export interface ChatStackXDoubleLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXDoubleLayered extends SvelteComponent<ChatStackXDoubleLayeredProps> {}
