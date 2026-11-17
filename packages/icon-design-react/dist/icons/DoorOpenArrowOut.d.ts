import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorOpenArrowOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorOpenArrowOut: ForwardRefExoticComponent<DoorOpenArrowOutProps & RefAttributes<SVGSVGElement>>;

export default DoorOpenArrowOut;
export { DoorOpenArrowOut };
