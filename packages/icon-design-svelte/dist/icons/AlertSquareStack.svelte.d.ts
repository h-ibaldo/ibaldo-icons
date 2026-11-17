import { SvelteComponent } from 'svelte';

export interface AlertSquareStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlertSquareStack extends SvelteComponent<AlertSquareStackProps> {}
