import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxPerspectiveShadedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxPerspectiveShaded: ForwardRefExoticComponent<BoxPerspectiveShadedProps & RefAttributes<SVGSVGElement>>;

export default BoxPerspectiveShaded;
export { BoxPerspectiveShaded };
