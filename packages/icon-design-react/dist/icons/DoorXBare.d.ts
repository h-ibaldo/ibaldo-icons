import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorXBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorXBare: ForwardRefExoticComponent<DoorXBareProps & RefAttributes<SVGSVGElement>>;

export default DoorXBare;
export { DoorXBare };
