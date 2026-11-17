import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsCheckDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsCheckDots: ForwardRefExoticComponent<OptionsCheckDotsProps & RefAttributes<SVGSVGElement>>;

export default OptionsCheckDots;
export { OptionsCheckDots };
