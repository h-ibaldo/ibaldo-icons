import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitBranchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitBranch: ForwardRefExoticComponent<GitBranchProps & RefAttributes<SVGSVGElement>>;

export default GitBranch;
export { GitBranch };
