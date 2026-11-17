import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSpreadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSpread: ForwardRefExoticComponent<HandSpreadProps & RefAttributes<SVGSVGElement>>;

export default HandSpread;
export { HandSpread };
