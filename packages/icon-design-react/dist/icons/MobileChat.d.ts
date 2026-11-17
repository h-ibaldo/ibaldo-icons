import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileChatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileChat: ForwardRefExoticComponent<MobileChatProps & RefAttributes<SVGSVGElement>>;

export default MobileChat;
export { MobileChat };
