import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BugProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bug: ForwardRefExoticComponent<BugProps & RefAttributes<SVGSVGElement>>;

export default Bug;
export { Bug };
