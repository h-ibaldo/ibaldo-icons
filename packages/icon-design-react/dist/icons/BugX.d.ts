import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BugXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BugX: ForwardRefExoticComponent<BugXProps & RefAttributes<SVGSVGElement>>;

export default BugX;
export { BugX };
