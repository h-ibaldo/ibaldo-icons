import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxOpen: ForwardRefExoticComponent<BoxOpenProps & RefAttributes<SVGSVGElement>>;

export default BoxOpen;
export { BoxOpen };
