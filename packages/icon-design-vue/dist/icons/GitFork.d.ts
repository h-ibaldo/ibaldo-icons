import type { DefineComponent } from 'vue';

export interface GitForkProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GitFork: DefineComponent<GitForkProps>;

export default GitFork;
export { GitFork };
