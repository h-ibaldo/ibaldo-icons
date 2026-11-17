import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudSquareSignalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudSquareSignal: ForwardRefExoticComponent<CloudSquareSignalProps & RefAttributes<SVGSVGElement>>;

export default CloudSquareSignal;
export { CloudSquareSignal };
