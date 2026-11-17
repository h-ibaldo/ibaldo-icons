import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteSearch: ForwardRefExoticComponent<BanknoteSearchProps & RefAttributes<SVGSVGElement>>;

export default BanknoteSearch;
export { BanknoteSearch };
