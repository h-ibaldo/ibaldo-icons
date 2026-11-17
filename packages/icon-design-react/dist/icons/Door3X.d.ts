import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door3XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door3X: ForwardRefExoticComponent<Door3XProps & RefAttributes<SVGSVGElement>>;

export default Door3X;
export { Door3X };
