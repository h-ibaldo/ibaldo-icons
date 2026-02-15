import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart1PositiveAddPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart1PositiveAddPlus: ForwardRefExoticComponent<Heart1PositiveAddPlusProps & RefAttributes<SVGSVGElement>>;

export default Heart1PositiveAddPlus;
export { Heart1PositiveAddPlus };
