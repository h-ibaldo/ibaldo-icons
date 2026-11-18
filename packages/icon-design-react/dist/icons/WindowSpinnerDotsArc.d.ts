import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSpinnerDotsArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSpinnerDotsArc: ForwardRefExoticComponent<WindowSpinnerDotsArcProps & RefAttributes<SVGSVGElement>>;

export default WindowSpinnerDotsArc;
export { WindowSpinnerDotsArc };
