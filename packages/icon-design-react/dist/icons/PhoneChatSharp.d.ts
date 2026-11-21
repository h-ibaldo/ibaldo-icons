import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneChatSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneChatSharp: ForwardRefExoticComponent<PhoneChatSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneChatSharp;
export { PhoneChatSharp };
