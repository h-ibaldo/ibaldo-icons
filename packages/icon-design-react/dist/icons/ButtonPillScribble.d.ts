import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonPillScribbleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonPillScribble: ForwardRefExoticComponent<ButtonPillScribbleProps & RefAttributes<SVGSVGElement>>;

export default ButtonPillScribble;
export { ButtonPillScribble };
