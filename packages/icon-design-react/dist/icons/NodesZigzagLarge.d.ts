import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NodesZigzagLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NodesZigzagLarge: ForwardRefExoticComponent<NodesZigzagLargeProps & RefAttributes<SVGSVGElement>>;

export default NodesZigzagLarge;
export { NodesZigzagLarge };
