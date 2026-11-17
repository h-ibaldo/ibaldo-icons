import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorSquareEnterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorSquareEnter: ForwardRefExoticComponent<DoorSquareEnterProps & RefAttributes<SVGSVGElement>>;

export default DoorSquareEnter;
export { DoorSquareEnter };
