import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorArrowInBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorArrowInBare: ForwardRefExoticComponent<DoorArrowInBareProps & RefAttributes<SVGSVGElement>>;

export default DoorArrowInBare;
export { DoorArrowInBare };
