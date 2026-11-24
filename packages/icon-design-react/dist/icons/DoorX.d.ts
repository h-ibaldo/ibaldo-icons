import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorX: ForwardRefExoticComponent<DoorXProps & RefAttributes<SVGSVGElement>>;

export default DoorX;
export { DoorX };
