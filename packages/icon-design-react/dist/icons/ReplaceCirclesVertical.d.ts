import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReplaceCirclesVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReplaceCirclesVertical: ForwardRefExoticComponent<ReplaceCirclesVerticalProps & RefAttributes<SVGSVGElement>>;

export default ReplaceCirclesVertical;
export { ReplaceCirclesVertical };
