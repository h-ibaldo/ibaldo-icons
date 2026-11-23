import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SeparatorHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SeparatorHorizontal: ForwardRefExoticComponent<SeparatorHorizontalProps & RefAttributes<SVGSVGElement>>;

export default SeparatorHorizontal;
export { SeparatorHorizontal };
