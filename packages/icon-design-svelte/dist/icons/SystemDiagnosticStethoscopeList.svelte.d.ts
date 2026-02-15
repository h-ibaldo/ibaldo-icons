import { SvelteComponent } from 'svelte';

export interface SystemDiagnosticStethoscopeListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SystemDiagnosticStethoscopeList extends SvelteComponent<SystemDiagnosticStethoscopeListProps> {}
