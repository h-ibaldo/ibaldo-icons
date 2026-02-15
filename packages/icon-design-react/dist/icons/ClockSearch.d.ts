import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSearch: ForwardRefExoticComponent<ClockSearchProps & RefAttributes<SVGSVGElement>>;

export default ClockSearch;
export { ClockSearch };
