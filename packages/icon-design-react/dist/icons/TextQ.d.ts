import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextQProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextQ: ForwardRefExoticComponent<TextQProps & RefAttributes<SVGSVGElement>>;

export default TextQ;
export { TextQ };
