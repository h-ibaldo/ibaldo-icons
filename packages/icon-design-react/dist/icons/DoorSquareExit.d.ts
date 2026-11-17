import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorSquareExitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorSquareExit: ForwardRefExoticComponent<DoorSquareExitProps & RefAttributes<SVGSVGElement>>;

export default DoorSquareExit;
export { DoorSquareExit };
