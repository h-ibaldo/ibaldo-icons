import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeViewVisualize2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeViewVisualize2: ForwardRefExoticComponent<EyeViewVisualize2Props & RefAttributes<SVGSVGElement>>;

export default EyeViewVisualize2;
export { EyeViewVisualize2 };
