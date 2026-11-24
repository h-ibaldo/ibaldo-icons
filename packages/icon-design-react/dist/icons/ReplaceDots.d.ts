import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReplaceDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReplaceDots: ForwardRefExoticComponent<ReplaceDotsProps & RefAttributes<SVGSVGElement>>;

export default ReplaceDots;
export { ReplaceDots };
