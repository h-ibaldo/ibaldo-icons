import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorArrowOutBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorArrowOutBare: ForwardRefExoticComponent<DoorArrowOutBareProps & RefAttributes<SVGSVGElement>>;

export default DoorArrowOutBare;
export { DoorArrowOutBare };
