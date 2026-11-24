import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneChatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneChat: ForwardRefExoticComponent<PhoneChatProps & RefAttributes<SVGSVGElement>>;

export default PhoneChat;
export { PhoneChat };
