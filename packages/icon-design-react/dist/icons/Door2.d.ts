import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door2: ForwardRefExoticComponent<Door2Props & RefAttributes<SVGSVGElement>>;

export default Door2;
export { Door2 };
