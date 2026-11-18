import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CopyrightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Copyright: ForwardRefExoticComponent<CopyrightProps & RefAttributes<SVGSVGElement>>;

export default Copyright;
export { Copyright };
