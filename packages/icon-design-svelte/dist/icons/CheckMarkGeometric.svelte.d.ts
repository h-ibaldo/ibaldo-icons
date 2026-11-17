import { SvelteComponent } from 'svelte';

export interface CheckMarkGeometricProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMarkGeometric extends SvelteComponent<CheckMarkGeometricProps> {}
