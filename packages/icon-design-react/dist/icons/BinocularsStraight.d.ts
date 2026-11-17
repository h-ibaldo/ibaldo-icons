import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsStraight: ForwardRefExoticComponent<BinocularsStraightProps & RefAttributes<SVGSVGElement>>;

export default BinocularsStraight;
export { BinocularsStraight };
