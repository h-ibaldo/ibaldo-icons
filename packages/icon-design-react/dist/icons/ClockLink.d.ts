import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockLinkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockLink: ForwardRefExoticComponent<ClockLinkProps & RefAttributes<SVGSVGElement>>;

export default ClockLink;
export { ClockLink };
