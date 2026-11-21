import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RocketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Rocket: ForwardRefExoticComponent<RocketProps & RefAttributes<SVGSVGElement>>;

export default Rocket;
export { Rocket };
