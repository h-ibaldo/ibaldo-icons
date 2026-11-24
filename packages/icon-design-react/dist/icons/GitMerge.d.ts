import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitMergeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitMerge: ForwardRefExoticComponent<GitMergeProps & RefAttributes<SVGSVGElement>>;

export default GitMerge;
export { GitMerge };
