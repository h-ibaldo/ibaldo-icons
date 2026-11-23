import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextIProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextI: ForwardRefExoticComponent<TextIProps & RefAttributes<SVGSVGElement>>;

export default TextI;
export { TextI };
