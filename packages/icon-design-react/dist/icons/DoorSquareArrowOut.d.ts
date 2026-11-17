import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorSquareArrowOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorSquareArrowOut: ForwardRefExoticComponent<DoorSquareArrowOutProps & RefAttributes<SVGSVGElement>>;

export default DoorSquareArrowOut;
export { DoorSquareArrowOut };
