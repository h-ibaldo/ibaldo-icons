import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonScribbleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonScribble: ForwardRefExoticComponent<ButtonScribbleProps & RefAttributes<SVGSVGElement>>;

export default ButtonScribble;
export { ButtonScribble };
