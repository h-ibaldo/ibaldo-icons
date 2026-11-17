import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Door3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Door3: ForwardRefExoticComponent<Door3Props & RefAttributes<SVGSVGElement>>;

export default Door3;
export { Door3 };
