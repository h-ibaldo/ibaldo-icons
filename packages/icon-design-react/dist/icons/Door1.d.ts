import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door1: ForwardRefExoticComponent<Door1Props & RefAttributes<SVGSVGElement>>;

export default Door1;
export { Door1 };
