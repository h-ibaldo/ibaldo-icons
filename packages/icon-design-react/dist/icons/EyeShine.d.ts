import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeShineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeShine: ForwardRefExoticComponent<EyeShineProps & RefAttributes<SVGSVGElement>>;

export default EyeShine;
export { EyeShine };
