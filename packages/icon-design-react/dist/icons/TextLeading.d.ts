import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextLeadingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextLeading: ForwardRefExoticComponent<TextLeadingProps & RefAttributes<SVGSVGElement>>;

export default TextLeading;
export { TextLeading };
