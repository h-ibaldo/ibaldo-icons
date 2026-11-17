import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorOpen: ForwardRefExoticComponent<DoorOpenProps & RefAttributes<SVGSVGElement>>;

export default DoorOpen;
export { DoorOpen };
