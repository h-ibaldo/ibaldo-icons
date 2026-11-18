import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RectanglePairDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RectanglePairDashed: ForwardRefExoticComponent<RectanglePairDashedProps & RefAttributes<SVGSVGElement>>;

export default RectanglePairDashed;
export { RectanglePairDashed };
