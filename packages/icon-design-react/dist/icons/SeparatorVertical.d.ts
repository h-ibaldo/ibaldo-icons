import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SeparatorVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SeparatorVertical: ForwardRefExoticComponent<SeparatorVerticalProps & RefAttributes<SVGSVGElement>>;

export default SeparatorVertical;
export { SeparatorVertical };
