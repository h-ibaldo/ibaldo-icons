import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerShineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerShine: ForwardRefExoticComponent<PointerShineProps & RefAttributes<SVGSVGElement>>;

export default PointerShine;
export { PointerShine };
