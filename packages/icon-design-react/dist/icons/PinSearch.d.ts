import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PinSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PinSearch: ForwardRefExoticComponent<PinSearchProps & RefAttributes<SVGSVGElement>>;

export default PinSearch;
export { PinSearch };
