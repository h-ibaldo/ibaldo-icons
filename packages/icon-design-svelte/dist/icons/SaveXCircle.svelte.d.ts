import { SvelteComponent } from 'svelte';

export interface SaveXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SaveXCircle extends SvelteComponent<SaveXCircleProps> {}
