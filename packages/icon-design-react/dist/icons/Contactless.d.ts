import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ContactlessProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Contactless: ForwardRefExoticComponent<ContactlessProps & RefAttributes<SVGSVGElement>>;

export default Contactless;
export { Contactless };
