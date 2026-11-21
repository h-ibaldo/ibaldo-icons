import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitPullRequestPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitPullRequestPlus: ForwardRefExoticComponent<GitPullRequestPlusProps & RefAttributes<SVGSVGElement>>;

export default GitPullRequestPlus;
export { GitPullRequestPlus };
