import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonBubble32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonBubble32: ForwardRefExoticComponent<ButtonBubble32Props & RefAttributes<SVGSVGElement>>;

export default ButtonBubble32;
export { ButtonBubble32 };
