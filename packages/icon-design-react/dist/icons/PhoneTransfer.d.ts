import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneTransferProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneTransfer: ForwardRefExoticComponent<PhoneTransferProps & RefAttributes<SVGSVGElement>>;

export default PhoneTransfer;
export { PhoneTransfer };
