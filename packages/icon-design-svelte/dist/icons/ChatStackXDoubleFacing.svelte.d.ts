import { SvelteComponent } from 'svelte';

export interface ChatStackXDoubleFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXDoubleFacing extends SvelteComponent<ChatStackXDoubleFacingProps> {}
