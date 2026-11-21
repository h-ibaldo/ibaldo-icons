import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CreditCardSignalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CreditCardSignal: ForwardRefExoticComponent<CreditCardSignalProps & RefAttributes<SVGSVGElement>>;

export default CreditCardSignal;
export { CreditCardSignal };
