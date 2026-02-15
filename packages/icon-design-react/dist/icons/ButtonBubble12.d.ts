import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonBubble12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonBubble12: ForwardRefExoticComponent<ButtonBubble12Props & RefAttributes<SVGSVGElement>>;

export default ButtonBubble12;
export { ButtonBubble12 };
