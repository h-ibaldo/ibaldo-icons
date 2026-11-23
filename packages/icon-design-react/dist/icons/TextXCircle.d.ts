import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextXCircle: ForwardRefExoticComponent<TextXCircleProps & RefAttributes<SVGSVGElement>>;

export default TextXCircle;
export { TextXCircle };
