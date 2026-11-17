import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressBarMultipleDottedSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressBarMultipleDottedSharp: ForwardRefExoticComponent<ProgressBarMultipleDottedSharpProps & RefAttributes<SVGSVGElement>>;

export default ProgressBarMultipleDottedSharp;
export { ProgressBarMultipleDottedSharp };
