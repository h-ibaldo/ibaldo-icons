import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Stop: ForwardRefExoticComponent<StopProps & RefAttributes<SVGSVGElement>>;

export default Stop;
export { Stop };
