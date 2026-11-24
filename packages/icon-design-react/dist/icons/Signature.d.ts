import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SignatureProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Signature: ForwardRefExoticComponent<SignatureProps & RefAttributes<SVGSVGElement>>;

export default Signature;
export { Signature };
