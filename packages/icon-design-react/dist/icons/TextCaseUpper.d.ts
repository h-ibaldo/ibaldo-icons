import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextCaseUpperProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextCaseUpper: ForwardRefExoticComponent<TextCaseUpperProps & RefAttributes<SVGSVGElement>>;

export default TextCaseUpper;
export { TextCaseUpper };
