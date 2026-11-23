import type { DefineComponent } from 'vue';

export interface GitConflictProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitConflict: DefineComponent<GitConflictProps>;

export default GitConflict;
export { GitConflict };
