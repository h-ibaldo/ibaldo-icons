import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackLinkSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackLinkSlanted: ForwardRefExoticComponent<SquareStackLinkSlantedProps & RefAttributes<SVGSVGElement>>;

export default SquareStackLinkSlanted;
export { SquareStackLinkSlanted };
