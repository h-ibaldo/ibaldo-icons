import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneChatRoundSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneChatRoundSharp: ForwardRefExoticComponent<PhoneChatRoundSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneChatRoundSharp;
export { PhoneChatRoundSharp };
