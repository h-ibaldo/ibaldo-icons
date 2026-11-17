import { SvelteComponent } from 'svelte';

export interface CheckSquareStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckSquareStack extends SvelteComponent<CheckSquareStackProps> {}
