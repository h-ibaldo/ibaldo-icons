import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitPullRequestDraftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitPullRequestDraft: ForwardRefExoticComponent<GitPullRequestDraftProps & RefAttributes<SVGSVGElement>>;

export default GitPullRequestDraft;
export { GitPullRequestDraft };
