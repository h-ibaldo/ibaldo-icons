import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChipLettersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChipLetters: ForwardRefExoticComponent<ChipLettersProps & RefAttributes<SVGSVGElement>>;

export default ChipLetters;
export { ChipLetters };
