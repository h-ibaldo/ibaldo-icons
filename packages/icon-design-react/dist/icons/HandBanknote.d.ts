import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandBanknoteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandBanknote: ForwardRefExoticComponent<HandBanknoteProps & RefAttributes<SVGSVGElement>>;

export default HandBanknote;
export { HandBanknote };
