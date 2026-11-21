import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitBranchPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitBranchPlus: ForwardRefExoticComponent<GitBranchPlusProps & RefAttributes<SVGSVGElement>>;

export default GitBranchPlus;
export { GitBranchPlus };
