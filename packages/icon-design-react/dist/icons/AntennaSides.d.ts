import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AntennaSidesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AntennaSides: ForwardRefExoticComponent<AntennaSidesProps & RefAttributes<SVGSVGElement>>;

export default AntennaSides;
export { AntennaSides };
