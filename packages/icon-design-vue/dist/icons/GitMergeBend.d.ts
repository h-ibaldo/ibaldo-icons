import type { DefineComponent } from 'vue';

export interface GitMergeBendProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitMergeBend: DefineComponent<GitMergeBendProps>;

export default GitMergeBend;
export { GitMergeBend };
