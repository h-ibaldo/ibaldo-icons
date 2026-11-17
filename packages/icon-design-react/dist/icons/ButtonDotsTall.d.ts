import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonDotsTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonDotsTall: ForwardRefExoticComponent<ButtonDotsTallProps & RefAttributes<SVGSVGElement>>;

export default ButtonDotsTall;
export { ButtonDotsTall };
