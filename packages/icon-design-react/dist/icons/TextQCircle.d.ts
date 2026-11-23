import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextQCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextQCircle: ForwardRefExoticComponent<TextQCircleProps & RefAttributes<SVGSVGElement>>;

export default TextQCircle;
export { TextQCircle };
