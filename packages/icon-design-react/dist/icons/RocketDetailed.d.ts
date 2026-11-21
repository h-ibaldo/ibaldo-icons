import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RocketDetailedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RocketDetailed: ForwardRefExoticComponent<RocketDetailedProps & RefAttributes<SVGSVGElement>>;

export default RocketDetailed;
export { RocketDetailed };
