import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorArrowIn: ForwardRefExoticComponent<DoorArrowInProps & RefAttributes<SVGSVGElement>>;

export default DoorArrowIn;
export { DoorArrowIn };
