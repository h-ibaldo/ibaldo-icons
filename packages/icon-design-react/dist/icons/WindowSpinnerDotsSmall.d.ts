import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSpinnerDotsSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSpinnerDotsSmall: ForwardRefExoticComponent<WindowSpinnerDotsSmallProps & RefAttributes<SVGSVGElement>>;

export default WindowSpinnerDotsSmall;
export { WindowSpinnerDotsSmall };
