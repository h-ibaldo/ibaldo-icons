import { SvelteComponent } from 'svelte';

export interface BroomSparklesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BroomSparkles extends SvelteComponent<BroomSparklesProps> {}
