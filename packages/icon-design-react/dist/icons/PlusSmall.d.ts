import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlusSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlusSmall: ForwardRefExoticComponent<PlusSmallProps & RefAttributes<SVGSVGElement>>;

export default PlusSmall;
export { PlusSmall };
