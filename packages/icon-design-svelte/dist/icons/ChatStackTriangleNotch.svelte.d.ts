import { SvelteComponent } from 'svelte';

export interface ChatStackTriangleNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTriangleNotch extends SvelteComponent<ChatStackTriangleNotchProps> {}
