import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CirclesStateArrowOneWayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CirclesStateArrowOneWay: ForwardRefExoticComponent<CirclesStateArrowOneWayProps & RefAttributes<SVGSVGElement>>;

export default CirclesStateArrowOneWay;
export { CirclesStateArrowOneWay };
