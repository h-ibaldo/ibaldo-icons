import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartPositiveAddPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartPositiveAddPlus: ForwardRefExoticComponent<HeartPositiveAddPlusProps & RefAttributes<SVGSVGElement>>;

export default HeartPositiveAddPlus;
export { HeartPositiveAddPlus };
