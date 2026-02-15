import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeViewVisualize3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeViewVisualize3: ForwardRefExoticComponent<EyeViewVisualize3Props & RefAttributes<SVGSVGElement>>;

export default EyeViewVisualize3;
export { EyeViewVisualize3 };
