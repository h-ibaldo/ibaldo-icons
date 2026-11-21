import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitPullRequestClosedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitPullRequestClosed: ForwardRefExoticComponent<GitPullRequestClosedProps & RefAttributes<SVGSVGElement>>;

export default GitPullRequestClosed;
export { GitPullRequestClosed };
