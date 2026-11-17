import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CapsuleOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CapsuleOff: ForwardRefExoticComponent<CapsuleOffProps & RefAttributes<SVGSVGElement>>;

export default CapsuleOff;
export { CapsuleOff };
