import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeViewVisualize4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeViewVisualize4: ForwardRefExoticComponent<EyeViewVisualize4Props & RefAttributes<SVGSVGElement>>;

export default EyeViewVisualize4;
export { EyeViewVisualize4 };
