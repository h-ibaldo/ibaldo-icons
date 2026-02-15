import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart3PositiveAddPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart3PositiveAddPlus: ForwardRefExoticComponent<Heart3PositiveAddPlusProps & RefAttributes<SVGSVGElement>>;

export default Heart3PositiveAddPlus;
export { Heart3PositiveAddPlus };
