import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MegaphoneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Megaphone: ForwardRefExoticComponent<MegaphoneProps & RefAttributes<SVGSVGElement>>;

export default Megaphone;
export { Megaphone };
