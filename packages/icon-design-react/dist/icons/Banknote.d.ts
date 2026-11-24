import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Banknote: ForwardRefExoticComponent<BanknoteProps & RefAttributes<SVGSVGElement>>;

export default Banknote;
export { Banknote };
