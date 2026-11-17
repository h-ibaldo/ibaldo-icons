import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door1XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door1X: ForwardRefExoticComponent<Door1XProps & RefAttributes<SVGSVGElement>>;

export default Door1X;
export { Door1X };
