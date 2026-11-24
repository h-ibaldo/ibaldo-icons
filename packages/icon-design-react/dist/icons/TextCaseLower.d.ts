import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextCaseLowerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextCaseLower: ForwardRefExoticComponent<TextCaseLowerProps & RefAttributes<SVGSVGElement>>;

export default TextCaseLower;
export { TextCaseLower };
