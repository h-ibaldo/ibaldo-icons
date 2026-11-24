import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneChatRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneChatRound: ForwardRefExoticComponent<PhoneChatRoundProps & RefAttributes<SVGSVGElement>>;

export default PhoneChatRound;
export { PhoneChatRound };
