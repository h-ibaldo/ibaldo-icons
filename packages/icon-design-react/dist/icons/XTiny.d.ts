import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XTinyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XTiny: ForwardRefExoticComponent<XTinyProps & RefAttributes<SVGSVGElement>>;

export default XTiny;
export { XTiny };
