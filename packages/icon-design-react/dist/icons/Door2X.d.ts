import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door2XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door2X: ForwardRefExoticComponent<Door2XProps & RefAttributes<SVGSVGElement>>;

export default Door2X;
export { Door2X };
