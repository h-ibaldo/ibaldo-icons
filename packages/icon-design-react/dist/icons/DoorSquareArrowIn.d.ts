import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorSquareArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorSquareArrowIn: ForwardRefExoticComponent<DoorSquareArrowInProps & RefAttributes<SVGSVGElement>>;

export default DoorSquareArrowIn;
export { DoorSquareArrowIn };
