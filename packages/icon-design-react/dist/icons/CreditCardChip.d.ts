import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CreditCardChipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CreditCardChip: ForwardRefExoticComponent<CreditCardChipProps & RefAttributes<SVGSVGElement>>;

export default CreditCardChip;
export { CreditCardChip };
