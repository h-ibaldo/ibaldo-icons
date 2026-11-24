import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NodesForkLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NodesForkLarge: ForwardRefExoticComponent<NodesForkLargeProps & RefAttributes<SVGSVGElement>>;

export default NodesForkLarge;
export { NodesForkLarge };
