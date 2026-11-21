import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrosshairPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CrosshairPlus: ForwardRefExoticComponent<CrosshairPlusProps & RefAttributes<SVGSVGElement>>;

export default CrosshairPlus;
export { CrosshairPlus };
