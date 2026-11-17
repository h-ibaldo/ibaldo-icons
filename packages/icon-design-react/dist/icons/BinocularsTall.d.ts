import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsTall: ForwardRefExoticComponent<BinocularsTallProps & RefAttributes<SVGSVGElement>>;

export default BinocularsTall;
export { BinocularsTall };
