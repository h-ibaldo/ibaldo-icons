import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitCommitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitCommit: ForwardRefExoticComponent<GitCommitProps & RefAttributes<SVGSVGElement>>;

export default GitCommit;
export { GitCommit };
