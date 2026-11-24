import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NotEqualProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NotEqual: ForwardRefExoticComponent<NotEqualProps & RefAttributes<SVGSVGElement>>;

export default NotEqual;
export { NotEqual };
