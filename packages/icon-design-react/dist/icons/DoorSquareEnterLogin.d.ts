import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoorSquareEnterLoginProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoorSquareEnterLogin: ForwardRefExoticComponent<DoorSquareEnterLoginProps & RefAttributes<SVGSVGElement>>;

export default DoorSquareEnterLogin;
export { DoorSquareEnterLogin };
