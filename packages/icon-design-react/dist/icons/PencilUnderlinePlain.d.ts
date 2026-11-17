import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilUnderlinePlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilUnderlinePlain: ForwardRefExoticComponent<PencilUnderlinePlainProps & RefAttributes<SVGSVGElement>>;

export default PencilUnderlinePlain;
export { PencilUnderlinePlain };
