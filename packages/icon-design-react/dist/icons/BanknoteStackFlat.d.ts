import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BanknoteStackFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BanknoteStackFlat: ForwardRefExoticComponent<BanknoteStackFlatProps & RefAttributes<SVGSVGElement>>;

export default BanknoteStackFlat;
export { BanknoteStackFlat };
