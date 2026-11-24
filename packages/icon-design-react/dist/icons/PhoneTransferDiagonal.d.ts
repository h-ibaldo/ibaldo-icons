import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneTransferDiagonalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneTransferDiagonal: ForwardRefExoticComponent<PhoneTransferDiagonalProps & RefAttributes<SVGSVGElement>>;

export default PhoneTransferDiagonal;
export { PhoneTransferDiagonal };
