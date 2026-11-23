import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SeparatorHorizontalInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SeparatorHorizontalIn: ForwardRefExoticComponent<SeparatorHorizontalInProps & RefAttributes<SVGSVGElement>>;

export default SeparatorHorizontalIn;
export { SeparatorHorizontalIn };
