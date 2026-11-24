import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlagOffNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlagOffNotched: ForwardRefExoticComponent<FlagOffNotchedProps & RefAttributes<SVGSVGElement>>;

export default FlagOffNotched;
export { FlagOffNotched };
