import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorArrowOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorArrowOut: ForwardRefExoticComponent<DoorArrowOutProps & RefAttributes<SVGSVGElement>>;

export default DoorArrowOut;
export { DoorArrowOut };
