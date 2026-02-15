import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeViewVisualize5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeViewVisualize5: ForwardRefExoticComponent<EyeViewVisualize5Props & RefAttributes<SVGSVGElement>>;

export default EyeViewVisualize5;
export { EyeViewVisualize5 };
