import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CreditCardChipDetailedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CreditCardChipDetailed: ForwardRefExoticComponent<CreditCardChipDetailedProps & RefAttributes<SVGSVGElement>>;

export default CreditCardChipDetailed;
export { CreditCardChipDetailed };
