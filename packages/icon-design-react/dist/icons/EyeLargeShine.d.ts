import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeLargeShineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeLargeShine: ForwardRefExoticComponent<EyeLargeShineProps & RefAttributes<SVGSVGElement>>;

export default EyeLargeShine;
export { EyeLargeShine };
