import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxOpenPerspectiveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxOpenPerspective: ForwardRefExoticComponent<BoxOpenPerspectiveProps & RefAttributes<SVGSVGElement>>;

export default BoxOpenPerspective;
export { BoxOpenPerspective };
