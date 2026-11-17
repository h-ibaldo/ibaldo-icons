import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressBarSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressBarSharp: ForwardRefExoticComponent<ProgressBarSharpProps & RefAttributes<SVGSVGElement>>;

export default ProgressBarSharp;
export { ProgressBarSharp };
