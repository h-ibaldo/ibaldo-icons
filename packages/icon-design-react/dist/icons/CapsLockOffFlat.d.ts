import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CapsLockOffFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CapsLockOffFlat: ForwardRefExoticComponent<CapsLockOffFlatProps & RefAttributes<SVGSVGElement>>;

export default CapsLockOffFlat;
export { CapsLockOffFlat };
