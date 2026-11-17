import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BinocularsBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BinocularsBoxy: ForwardRefExoticComponent<BinocularsBoxyProps & RefAttributes<SVGSVGElement>>;

export default BinocularsBoxy;
export { BinocularsBoxy };
