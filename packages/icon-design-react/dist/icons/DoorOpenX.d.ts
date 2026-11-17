import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorOpenXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorOpenX: ForwardRefExoticComponent<DoorOpenXProps & RefAttributes<SVGSVGElement>>;

export default DoorOpenX;
export { DoorOpenX };
