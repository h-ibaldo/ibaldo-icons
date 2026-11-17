import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeOffLargeShineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeOffLargeShine: ForwardRefExoticComponent<EyeOffLargeShineProps & RefAttributes<SVGSVGElement>>;

export default EyeOffLargeShine;
export { EyeOffLargeShine };
