import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ButtonBubble3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ButtonBubble3: ForwardRefExoticComponent<ButtonBubble3Props & RefAttributes<SVGSVGElement>>;

export default ButtonBubble3;
export { ButtonBubble3 };
