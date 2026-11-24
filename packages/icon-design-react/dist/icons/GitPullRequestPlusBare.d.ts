import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitPullRequestPlusBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitPullRequestPlusBare: ForwardRefExoticComponent<GitPullRequestPlusBareProps & RefAttributes<SVGSVGElement>>;

export default GitPullRequestPlusBare;
export { GitPullRequestPlusBare };
