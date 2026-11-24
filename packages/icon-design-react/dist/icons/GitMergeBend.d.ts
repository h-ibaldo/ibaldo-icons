import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GitMergeBendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GitMergeBend: ForwardRefExoticComponent<GitMergeBendProps & RefAttributes<SVGSVGElement>>;

export default GitMergeBend;
export { GitMergeBend };
