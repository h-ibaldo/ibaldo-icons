import { SvelteComponent } from 'svelte';

export interface CameraSyncOrbitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CameraSyncOrbit extends SvelteComponent<CameraSyncOrbitProps> {}
