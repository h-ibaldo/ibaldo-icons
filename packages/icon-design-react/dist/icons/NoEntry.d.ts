import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NoEntryProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NoEntry: ForwardRefExoticComponent<NoEntryProps & RefAttributes<SVGSVGElement>>;

export default NoEntry;
export { NoEntry };
