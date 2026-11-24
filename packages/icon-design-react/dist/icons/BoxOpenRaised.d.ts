import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxOpenRaisedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxOpenRaised: ForwardRefExoticComponent<BoxOpenRaisedProps & RefAttributes<SVGSVGElement>>;

export default BoxOpenRaised;
export { BoxOpenRaised };
