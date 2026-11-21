import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitPullRequestBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitPullRequestBare: ForwardRefExoticComponent<GitPullRequestBareProps & RefAttributes<SVGSVGElement>>;

export default GitPullRequestBare;
export { GitPullRequestBare };
