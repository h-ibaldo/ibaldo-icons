import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeViewVisualize1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeViewVisualize1: ForwardRefExoticComponent<EyeViewVisualize1Props & RefAttributes<SVGSVGElement>>;

export default EyeViewVisualize1;
export { EyeViewVisualize1 };
