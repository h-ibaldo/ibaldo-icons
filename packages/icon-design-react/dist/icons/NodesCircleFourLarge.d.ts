import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NodesCircleFourLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NodesCircleFourLarge: ForwardRefExoticComponent<NodesCircleFourLargeProps & RefAttributes<SVGSVGElement>>;

export default NodesCircleFourLarge;
export { NodesCircleFourLarge };
