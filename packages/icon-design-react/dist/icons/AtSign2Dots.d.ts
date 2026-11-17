import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign2DotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign2Dots: ForwardRefExoticComponent<AtSign2DotsProps & RefAttributes<SVGSVGElement>>;

export default AtSign2Dots;
export { AtSign2Dots };
