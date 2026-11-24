import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlagNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlagNotched: ForwardRefExoticComponent<FlagNotchedProps & RefAttributes<SVGSVGElement>>;

export default FlagNotched;
export { FlagNotched };
