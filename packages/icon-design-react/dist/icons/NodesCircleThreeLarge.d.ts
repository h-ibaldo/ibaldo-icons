import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NodesCircleThreeLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NodesCircleThreeLarge: ForwardRefExoticComponent<NodesCircleThreeLargeProps & RefAttributes<SVGSVGElement>>;

export default NodesCircleThreeLarge;
export { NodesCircleThreeLarge };
