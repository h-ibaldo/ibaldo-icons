import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextMProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextM: ForwardRefExoticComponent<TextMProps & RefAttributes<SVGSVGElement>>;

export default TextM;
export { TextM };
