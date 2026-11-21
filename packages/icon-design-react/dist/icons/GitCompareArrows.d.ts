import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitCompareArrowsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitCompareArrows: ForwardRefExoticComponent<GitCompareArrowsProps & RefAttributes<SVGSVGElement>>;

export default GitCompareArrows;
export { GitCompareArrows };
