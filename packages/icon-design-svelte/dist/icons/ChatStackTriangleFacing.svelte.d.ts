import { SvelteComponent } from 'svelte';

export interface ChatStackTriangleFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTriangleFacing extends SvelteComponent<ChatStackTriangleFacingProps> {}
