import { SvelteComponent } from 'svelte';

export interface PencilUnderlinePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PencilUnderlinePlain extends SvelteComponent<PencilUnderlinePlainProps> {}
