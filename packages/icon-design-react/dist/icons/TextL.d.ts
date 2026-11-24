import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextLProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextL: ForwardRefExoticComponent<TextLProps & RefAttributes<SVGSVGElement>>;

export default TextL;
export { TextL };
