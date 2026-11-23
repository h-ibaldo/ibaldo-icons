import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitConflictProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitConflict: ForwardRefExoticComponent<GitConflictProps & RefAttributes<SVGSVGElement>>;

export default GitConflict;
export { GitConflict };
