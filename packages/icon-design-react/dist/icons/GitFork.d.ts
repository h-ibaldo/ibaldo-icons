import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitForkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitFork: ForwardRefExoticComponent<GitForkProps & RefAttributes<SVGSVGElement>>;

export default GitFork;
export { GitFork };
