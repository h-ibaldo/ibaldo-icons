import { SvelteComponent } from 'svelte';

export interface DatabaseDenseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DatabaseDense extends SvelteComponent<DatabaseDenseProps> {}
