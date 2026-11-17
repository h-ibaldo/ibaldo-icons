import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressBarStripedSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressBarStripedSharp: ForwardRefExoticComponent<ProgressBarStripedSharpProps & RefAttributes<SVGSVGElement>>;

export default ProgressBarStripedSharp;
export { ProgressBarStripedSharp };
