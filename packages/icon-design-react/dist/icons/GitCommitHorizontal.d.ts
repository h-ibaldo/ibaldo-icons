import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitCommitHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitCommitHorizontal: ForwardRefExoticComponent<GitCommitHorizontalProps & RefAttributes<SVGSVGElement>>;

export default GitCommitHorizontal;
export { GitCommitHorizontal };
