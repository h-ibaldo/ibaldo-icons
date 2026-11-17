import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorOpenArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorOpenArrowIn: ForwardRefExoticComponent<DoorOpenArrowInProps & RefAttributes<SVGSVGElement>>;

export default DoorOpenArrowIn;
export { DoorOpenArrowIn };
