import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DeskUserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DeskUser: ForwardRefExoticComponent<DeskUserProps & RefAttributes<SVGSVGElement>>;

export default DeskUser;
export { DeskUser };
