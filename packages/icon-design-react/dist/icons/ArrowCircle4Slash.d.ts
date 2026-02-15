import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowCircle4SlashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowCircle4Slash: ForwardRefExoticComponent<ArrowCircle4SlashProps & RefAttributes<SVGSVGElement>>;

export default ArrowCircle4Slash;
export { ArrowCircle4Slash };
