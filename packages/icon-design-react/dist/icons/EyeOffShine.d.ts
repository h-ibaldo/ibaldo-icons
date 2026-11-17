import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EyeOffShineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EyeOffShine: ForwardRefExoticComponent<EyeOffShineProps & RefAttributes<SVGSVGElement>>;

export default EyeOffShine;
export { EyeOffShine };
