import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackBanCornerNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackBanCornerNotch: ForwardRefExoticComponent<ChatStackBanCornerNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackBanCornerNotch;
export { ChatStackBanCornerNotch };
