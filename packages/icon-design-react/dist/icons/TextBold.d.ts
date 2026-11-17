import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextBoldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextBold: ForwardRefExoticComponent<TextBoldProps & RefAttributes<SVGSVGElement>>;

export default TextBold;
export { TextBold };
