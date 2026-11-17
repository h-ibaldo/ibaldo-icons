import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OverscanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Overscan: ForwardRefExoticComponent<OverscanProps & RefAttributes<SVGSVGElement>>;

export default Overscan;
export { Overscan };
