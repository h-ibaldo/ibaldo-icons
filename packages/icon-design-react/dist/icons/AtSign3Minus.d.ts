import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign3MinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign3Minus: ForwardRefExoticComponent<AtSign3MinusProps & RefAttributes<SVGSVGElement>>;

export default AtSign3Minus;
export { AtSign3Minus };
