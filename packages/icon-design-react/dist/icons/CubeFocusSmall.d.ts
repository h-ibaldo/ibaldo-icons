import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CubeFocusSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CubeFocusSmall: ForwardRefExoticComponent<CubeFocusSmallProps & RefAttributes<SVGSVGElement>>;

export default CubeFocusSmall;
export { CubeFocusSmall };
