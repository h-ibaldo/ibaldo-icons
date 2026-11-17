import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll7UsersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll7Users: ForwardRefExoticComponent<Poll7UsersProps & RefAttributes<SVGSVGElement>>;

export default Poll7Users;
export { Poll7Users };
