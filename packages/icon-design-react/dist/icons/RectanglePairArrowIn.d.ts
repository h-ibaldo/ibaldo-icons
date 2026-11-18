import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RectanglePairArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RectanglePairArrowIn: ForwardRefExoticComponent<RectanglePairArrowInProps & RefAttributes<SVGSVGElement>>;

export default RectanglePairArrowIn;
export { RectanglePairArrowIn };
