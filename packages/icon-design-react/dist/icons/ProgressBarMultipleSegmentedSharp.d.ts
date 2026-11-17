import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressBarMultipleSegmentedSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressBarMultipleSegmentedSharp: ForwardRefExoticComponent<ProgressBarMultipleSegmentedSharpProps & RefAttributes<SVGSVGElement>>;

export default ProgressBarMultipleSegmentedSharp;
export { ProgressBarMultipleSegmentedSharp };
