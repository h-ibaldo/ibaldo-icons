import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowSpinnerRaysProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowSpinnerRays: ForwardRefExoticComponent<WindowSpinnerRaysProps & RefAttributes<SVGSVGElement>>;

export default WindowSpinnerRays;
export { WindowSpinnerRays };
