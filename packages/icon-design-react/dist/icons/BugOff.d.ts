import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BugOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BugOff: ForwardRefExoticComponent<BugOffProps & RefAttributes<SVGSVGElement>>;

export default BugOff;
export { BugOff };
