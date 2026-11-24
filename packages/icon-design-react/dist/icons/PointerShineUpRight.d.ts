import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerShineUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerShineUpRight: ForwardRefExoticComponent<PointerShineUpRightProps & RefAttributes<SVGSVGElement>>;

export default PointerShineUpRight;
export { PointerShineUpRight };
