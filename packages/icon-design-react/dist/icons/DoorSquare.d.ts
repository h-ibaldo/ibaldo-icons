import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorSquare: ForwardRefExoticComponent<DoorSquareProps & RefAttributes<SVGSVGElement>>;

export default DoorSquare;
export { DoorSquare };
