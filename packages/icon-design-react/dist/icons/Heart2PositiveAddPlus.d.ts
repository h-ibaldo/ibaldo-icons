import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart2PositiveAddPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart2PositiveAddPlus: ForwardRefExoticComponent<Heart2PositiveAddPlusProps & RefAttributes<SVGSVGElement>>;

export default Heart2PositiveAddPlus;
export { Heart2PositiveAddPlus };
