import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorBare: ForwardRefExoticComponent<DoorBareProps & RefAttributes<SVGSVGElement>>;

export default DoorBare;
export { DoorBare };
