import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitPullRequestXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitPullRequestX: ForwardRefExoticComponent<GitPullRequestXProps & RefAttributes<SVGSVGElement>>;

export default GitPullRequestX;
export { GitPullRequestX };
