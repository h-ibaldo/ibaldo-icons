import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanLettersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanLetters: ForwardRefExoticComponent<ScanLettersProps & RefAttributes<SVGSVGElement>>;

export default ScanLetters;
export { ScanLetters };
