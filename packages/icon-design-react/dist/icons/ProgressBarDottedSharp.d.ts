import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressBarDottedSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressBarDottedSharp: ForwardRefExoticComponent<ProgressBarDottedSharpProps & RefAttributes<SVGSVGElement>>;

export default ProgressBarDottedSharp;
export { ProgressBarDottedSharp };
