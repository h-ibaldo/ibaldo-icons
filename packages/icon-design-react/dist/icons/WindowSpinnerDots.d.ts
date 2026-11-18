import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSpinnerDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSpinnerDots: ForwardRefExoticComponent<WindowSpinnerDotsProps & RefAttributes<SVGSVGElement>>;

export default WindowSpinnerDots;
export { WindowSpinnerDots };
