import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlagLeftNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlagLeftNotched: ForwardRefExoticComponent<FlagLeftNotchedProps & RefAttributes<SVGSVGElement>>;

export default FlagLeftNotched;
export { FlagLeftNotched };
