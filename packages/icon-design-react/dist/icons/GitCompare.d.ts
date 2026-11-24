import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitCompareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitCompare: ForwardRefExoticComponent<GitCompareProps & RefAttributes<SVGSVGElement>>;

export default GitCompare;
export { GitCompare };
