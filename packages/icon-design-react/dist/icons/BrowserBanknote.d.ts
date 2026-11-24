import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserBanknoteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserBanknote: ForwardRefExoticComponent<BrowserBanknoteProps & RefAttributes<SVGSVGElement>>;

export default BrowserBanknote;
export { BrowserBanknote };
