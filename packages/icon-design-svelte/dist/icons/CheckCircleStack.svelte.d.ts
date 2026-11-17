import { SvelteComponent } from 'svelte';

export interface CheckCircleStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckCircleStack extends SvelteComponent<CheckCircleStackProps> {}
