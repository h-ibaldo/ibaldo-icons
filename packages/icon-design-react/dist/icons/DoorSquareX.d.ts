import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorSquareXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorSquareX: ForwardRefExoticComponent<DoorSquareXProps & RefAttributes<SVGSVGElement>>;

export default DoorSquareX;
export { DoorSquareX };
